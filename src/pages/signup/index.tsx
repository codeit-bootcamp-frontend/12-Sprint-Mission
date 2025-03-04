
import React from "react";
import SignupForm from "@/components/forms/Signup/Signup";
import Social from "@/components/ui/forms/Social/Social";
import styles from "./index.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

export default function LoginPage(){
    const router = useRouter();
    const handleLogoClick = () => {
        router.push('/');
    }

    return(
        <>
            <div className={styles.container}>
                <Image src="/icons/logo.png" alt="logo" width={369} height={132} style ={{cursor: "pointer"}} onClick={handleLogoClick} />
                <SignupForm />
                <Social />
                <div className={styles.signuptext}>
                    <p>판다마켓이 처음이신가요?<span> 회원가입</span></p>
                </div>
            </div>
        </>
    
    )
}