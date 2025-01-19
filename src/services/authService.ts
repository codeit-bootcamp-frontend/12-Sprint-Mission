interface SignupPayload {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

export async function signup(payload: SignupPayload) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    throw new Error("BASE_URL 환경변수가 설정되지 않았습니다.");
  }
  const url = new URL(`${baseUrl}/auth/signUp`);
  console.log("실제 payload:", payload); // <= 디버깅용 로그
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("서버에러 내용", errorText);
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
