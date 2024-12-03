const { VITE_API_URL } = import.meta.env;

export async function login({ email, password }) {
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
    throw {
      status: res.status,
      message: data.message || "에러가 발생했습니다.",
    };
  }

  return data;
}

export async function signUp({
  email,
  nickname,
  password,
  passwordConfirmation,
}) {
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
    throw {
      status: res.status,
      message: data.message || "에러가 발생했습니다.",
    };
  }

  return data;
}

export async function refreshAccessToken(refreshToken) {
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
    throw {
      status: res.status,
      message: data.message || "에러가 발생했습니다.",
    };
  }

  return data;
}

export async function getUser(accessToken) {
  const res = await fetch(`${VITE_API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw {
      status: res.status,
      message: data.message || "에러가 발생했습니다.",
    };
  }

  return data;
}
