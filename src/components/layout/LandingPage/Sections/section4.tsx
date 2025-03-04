"use client";

import React from 'react';
import styles from './section2.module.scss';
import Image from 'next/image';



export default function Section4(){

    return(
        <>
            <div className={styles.container}>
                <section className={styles.section}>
                    <Image src="/images/landingS4.png" alt="landingS2" width={579} height={444}/>
                    <div className={styles.sectiontext}>
                        <h4>Register</h4>
                        <h1>판매를 원하는 <br />
                            상품을 등록하세요
                        </h1>
                        <h3>
                            어떤 물건이든 판매하고 싶은 상품을 <br />
                            쉽게 등록하세요
                        </h3>
                    </div>
                </section>

            </div>

        </>
    );
}