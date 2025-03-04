import { useState } from "react";
import { loginUser, signupUser } from "@/api/api";

export const useAuth = () => {
    const [loading, setLoading ] = useState(false);
    const [ error, setError] = useState<string|null>(null);

    const handleLogin = async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        try{
            const userData = await loginUser(email, password);
            console.log("로그인 성공", userData);
            return userData;
        } catch (err:any){
            if(err.response){
                console.error("로그인 실패", err.response.status, err.response.data);
                setError(err.response.data.message || "로그인에 실패햇씁니다.")
            } else if (err.request){
                console.error("응답이없습니다", err.request);
                setError("서버로부터 응답없음")
            } else {
                console.error("요청오류", err.message);
            }
        } finally {
            setLoading(false);
        }
    };

   
    const handleSignUp = async(email:string, nickname:string, password:string, passwordConfirmation:string) => {
        setLoading(true);
        setError(null);

        try{
            const userData = await signupUser(email, nickname, password, passwordConfirmation);
            console.log("회원가입성공공", userData);
            return userData;
        } catch (err){
            console.log("회원가입실패패");
            console.error(err);
        } finally {
            setLoading(false);
        }
    }
    return { handleLogin, handleSignUp, loading, error};

}