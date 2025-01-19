interface SignupPayload {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

export async function signup(payload: SignupPayload) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    throw new Error("BASE_URL 환경변수가 설정되지 않았습니다.");
  }
  const url = new URL(`${baseUrl}/auth/signUp`);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("회원가입 실패");
    }

    const result = await response.json();
    // result 안에 { user, accessToken, refreshToken}

    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function login(payload: LoginPayload) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    throw new Error("BASE_URL 환경변수가 설정되지 않았습니다.");
  }
  const url = new URL(`${baseUrl}/auth/signIn`);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("로그인 실패");
    }

    const result = await response.json();
    // { accessToken, refreshToken } 등의 정보 포함

    return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
