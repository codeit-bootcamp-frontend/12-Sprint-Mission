"use client";

import React from 'react';
import styles from './section1.module.scss';
import Image from 'next/image';
import CustomButton from '@/components/ui/CustomButton/CustomButton';



export default function Section1(){

    return(
        <>
            <div className={styles.container}>
                <div className={styles.textandbutton}>
                    <h1>
                        일상의 모든 물건을 <br/>
                        거래해 보세요
                    </h1>
                    <CustomButton
                    width={357}
                    height={56}
                    className={styles.custombutton}>
                        <p>구경하러 가기</p>
                    </CustomButton>
                </div>
                <div className={styles.s1img}>
                    <Image src="/images/landingS1.png" alt="landingimg" width={746} height={340}/>
                </div>
                

            </div>

        </>
    );
}