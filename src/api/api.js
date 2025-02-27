import axios from "axios";

const BASE_URL = "https://panda-market-api.vercel.app";

export const getProductData = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  try {
    const response = await axios.get(`${BASE_URL}/products?${query}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return error.message;
  }
};

export const postUserData = async ({
  email,
  nickname,
  password,
  passwordConfirmation,
}) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signUp`, {
      email,
      nickname,
      password,
      passwordConfirmation,
    });

    if (response.status === 201) {
      // 성공적인 회원가입
      return { success: true, message: "회원가입이 완료되었습니다." };
    } else {
      // 실패 처리
      return {
        success: false,
        message: response.data.message || "회원가입에 실패했습니다.",
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      success: false,
      message: error.message || "서버 오류가 발생했습니다.",
    };
  }
};

export const postUserLoginData = async ({ email, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/signIn`, {
      email,
      password,
    });
    if (response.status === 200) {
      return { success: true, message: "로그인이 완료되었습니다." };
    } else {
      return {
        success: false,
        message: response.data.message || "로그인에 실패했습니다.",
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      success: false,
      message: error.message || "서버 오류가 발생했습니다.",
    };
  }
};
