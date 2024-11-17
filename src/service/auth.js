const { VITE_API_URL } = import.meta.env;

export async function login({ email, password }) {
  try {
    const res = await fetch(`${VITE_API_URL}/auth/signIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "에러가 발생했습니다.");
    }

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function signUp({
  email,
  nickname,
  password,
  passwordConfirmation,
}) {
  try {
    const res = await fetch(`${VITE_API_URL}/auth/signUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        nickname,
        password,
        passwordConfirmation,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "에러가 발생했습니다.");
    }

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function refreshAccessToken(refreshToken) {
  try {
    const res = await fetch(`${VITE_API_URL}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "에러가 발생했습니다.");
    }

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUser(accessToken) {
  try {
    const res = await fetch(`${VITE_API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "에러가 발생했습니다.");
    }

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
