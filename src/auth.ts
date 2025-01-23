import { signinFormSchmea } from "@/schemas/auth";
import { login, refreshAccessToken } from "@/service/auth";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";

declare module "next-auth" {
  interface User {
    accessToken: string;
    refreshToken: string;
    nickname: string;
  }

  interface Session {
    user: User;
    accessToken: string;
    refreshToken: string;
  }

  interface JWT {
    user: User;
    accessToken: string;
    refreshToken: string;
  }
}

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: update,
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const result = await signinFormSchmea.parseAsync(credentials);
          const { user, accessToken, refreshToken } = await login(result);

          return {
            id: user.id.toString(),
            name: user.nickname,
            email: result.email,
            nickname: user.nickname,
            image: user.image,
            accessToken,
            refreshToken,
          };
        } catch (error) {
          if (error instanceof ZodError) {
            throw new Error("잘못된 입력값");
          }

          if (axios.isAxiosError(error)) {
            const message = error.response?.data?.message;
            const credentialsSignin = new CredentialsSignin();
            credentialsSignin.message = message;
            credentialsSignin.code = message;

            throw credentialsSignin;
          }

          throw new Error("로그인 실패");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 7,
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt: async ({ token, user, trigger, session }) => {
      // 쿠키에 저장된 token내역이 있으면 검증
      if (token?.accessToken && typeof token.accessToken === "string") {
        // accessToken이 만료됬으면 재발급;
        const decodedToken = jwtDecode(token.accessToken as string);
        const expiredTime = (decodedToken.exp || 0) * 1000;
        if (Date.now() > expiredTime) {
          try {
            const { accessToken } = await refreshAccessToken(
              token.refreshToken as string
            );
            token.accessToken = accessToken;
          } catch (err) {
            console.error(err);
          }
        }
      }

      // useSession의 update를 통해서 accessToken을 줄때
      if (trigger === "update" && session.accessToken) {
        token.accessToken = session.accessToken;
      }

      // 로그인 시도가 있었을때
      if (user) {
        token.id = user.id;
        token.nickname = user.nickname;
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id as string;
        session.user.nickname = token.nickname as string;
        session.accessToken = token.accessToken as string;
        session.refreshToken = token.refreshToken as string;
      }

      return session;
    },
  },
});
