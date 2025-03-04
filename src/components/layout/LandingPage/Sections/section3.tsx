"use client";

import React from 'react';
import styles from './section2.module.scss';
import Image from 'next/image';



export default function Section3(){

    return(
        <>
            <div className={styles.container}>
                <section className={styles.section}>
                    <div className={styles.sectiontext3}>
                            <h4>Search</h4>
                            <h1>구매를 원하는<br />
                                상품을 검색하세요
                            </h1>
                            <h3>
                                구매하고 싶은 물품은 검색해서<br />
                                쉽게 찾아보세요
                            </h3>
                        </div>
                     <Image src="/images/landingS3.png" alt="landingS2" width={579} height={444}/>
                    
                </section>

            </div>

        </>
    );
}