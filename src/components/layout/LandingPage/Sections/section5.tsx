"use client";

import React from 'react';
import styles from './section1.module.scss';
import Image from 'next/image';




export default function Section5(){

    return(
        <>
            <div className={styles.container}>
                <div className={styles.textandbutton}>
                    <h1>
                        믿을 수 있는 <br/>
                        판다마켓 중고 거래
                    </h1>
                </div>
                <div className={styles.s5img}>
                    <Image src="/images/landingS5.png" alt="landingimg" width={746} height={397}/>
                </div>
                

            </div>

        </>
    );
}