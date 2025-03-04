import axios from "axios";

const API_BASE_URL = "https://panda-market-api.vercel.app";

export const loginUser = async (email: string, password: string) => {
    const response = await axios.post (`${API_BASE_URL}/auth/signIn`,{
        email,
        password,
    });
    return response.data;
};

export const signupUser = async(email:string, nickname:string, password:string, passwordConfirmation:string) => {
    const response = await axios.post(`${API_BASE_URL}/auth/signUp`, {
        email,
        nickname,
        password,
        passwordConfirmation,
    });
    return response.data;
}