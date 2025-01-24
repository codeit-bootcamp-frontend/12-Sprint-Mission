import axios from "axios";

export const axiosIntance = axios.create({
    baseURL: "https://panda-market-api.vercel.app/",
})
