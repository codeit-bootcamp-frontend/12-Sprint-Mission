import { z } from "zod";

export interface Writer {
  nickname: string;
  id: number;
  image?: string;
}

export interface Article {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: Writer;
  image: string;
  content: string;
  title: string;
  id: number;
}

export interface FetchArticlesResponse {
  totalCount: number;
  list: Article[];
}

export interface ArticleDetailResponse extends Article {
  isLiked: boolean;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

export interface FetchCommentsResponse {
  nextCursor: number;
  list: Comment[];
}

export interface PostPayload {
  title: string;
  content: string;
  image?: File | null;
}

export interface SignupResponse {
  user: {
    id: number;
    email: string;
    image: null;
    nickname: string;
    updatedAt: string;
    createdAt: string;
  };
  accessToken: string;
  refreshToken: string;
}

export interface LoginResponse {
  user: {
    id: number;
    email: string;
    image: null;
    nickname: string;
    updatedAt: string;
    createdAt: string;
  };
  accessToken: string;
  refreshToken: string;
}

export const signupSchema = z
  .object({
    email: z.string().email("유효한 이메일 형식이 아닙니다").nonempty("이메일은 필수입니다"),
    nickname: z.string().min(1, "닉네임은 필수입니다"),
    password: z
      .string()
      .min(8, "비밀번호는 최소 8자 이상이어야 합니다")
      .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, "비밀번호는 최소 하나의 문자와 숫자를 포함해야 합니다"),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["passwordConfirmation"],
  });

export const loginSchema = z.object({
  email: z.string().email("유효한 이메일 형식이 아닙니다").nonempty("이메일은 필수입니다"),
  password: z.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다").nonempty("비밀번호는 필수입니다"),
});

export type SignupRequest = z.infer<typeof signupSchema>;
export type LoginRequest = z.infer<typeof loginSchema>;
