"use client";

import React from 'react';
import styles from './section2.module.scss';
import Image from 'next/image';



export default function Section2(){

    return(
        <>
            <div className={styles.container}>
                <section className={styles.section}>
                    <Image src="/images/landingS2.png" alt="landingS2" width={579} height={444}/>
                    <div className={styles.sectiontext}>
                        <h4>Hot item</h4>
                        <h1>인기 상품을 <br />
                            확인해 보세요
                        </h1>
                        <h3>
                            가장 HOT한 중고거래 물품을 <br />
                            판다 마켓에서 확인해 보세요요
                        </h3>
                    </div>
                </section>

            </div>

        </>
    );
}