"use client";

import React from 'react';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import CustomButton from '@/components/ui/CustomButton/CustomButton';
import { useRouter } from 'next/router';


export default function Navbar(){
    const router = useRouter();

    const handleClick = () => {
        router.push("/login");
    }

    const handleLogoClick = ()=>{
        router.push("/");
    }


    return(
        <>
            <div className={styles.container}>
                <div className={styles.navlogo} onClick={handleLogoClick}>
                    <Image src="/images/navlogo.png" alt="navlogo" width={153} height={51}/>
                </div>
                <div className={styles.navbutton}>
                    <CustomButton 
                    width={128} 
                    height={48} 
                    className={styles.custombutton}
                    onClick={handleClick}
                    >
                        <p>로그인</p>
                    </CustomButton>

                </div>

            </div>

        </>
    );
}