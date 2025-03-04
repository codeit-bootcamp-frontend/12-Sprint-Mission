import React from "react";
import styles from "./Social.module.scss";
import Image from "next/image";


export default function Social () {


    return(
        <div className={styles.container}>
            <span>간편 로그인하기</span>
            <div className={styles.socials}>
                <Image src="/icons/google.png" alt="googleicon" width={42} height={42}/>
                <Image src="/icons/kakao.png" alt="kakaoicon" width={42}  height={42}/>
            </div>
         </div>
    )
}