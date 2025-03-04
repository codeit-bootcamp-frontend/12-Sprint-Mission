"use client";

import React from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';



export default function Footer(){
    




    return(
        <>
            <div className={styles.container}>
                <div className={styles.section} >
                    <div className={styles.footersection}>
                        <p> ©codeit - 2024  </p>
                    </div>
                    <div  className={styles.footersection2}>
                        <p>Privacy Policy</p>
                        <p> FAQ</p>
                    </div>
                    <div  className={styles.footersection3}>
                        <div className={styles.snsicon}>
                            <Image src="/icons/ic_facebook.png" alt="facebookicon" width={20} height={20} />
                        </div>
                        <div className={styles.snsicon}>
                            <Image src="/icons/ic_twitter.png" alt="twittericon" width={20} height={20} />
                        </div>
                        <div className={styles.snsicon}>
                            <Image src="/icons/ic_youtube.png" alt="youtubeicon" width={20} height={20} />
                        </div>
                        <div className={styles.snsicon}>
                            <Image src="/icons/ic_instagram.png" alt="instagramicon" width={20} height={20} />
                        </div>
                    </div>
                    </div>
                </div>
     

        </>
    );
}