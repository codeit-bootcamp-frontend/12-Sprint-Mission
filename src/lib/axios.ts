import axios from "axios";

const Instance = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
});

export default Instance;
export { axios };
