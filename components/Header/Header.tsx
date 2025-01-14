import styles from "./ Header.module.css";
import logo from "@/public/logo.svg";
import profile from "@/public/profile.svg";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className={styles.HeaderContainer}>
                <div className={styles.Header}>
                    <div className={styles.HeaderLogoContainer}>
                        <div className={styles.HeaderLogo}>
                            <Image
                                src={logo}
                                alt="Logo"
                                width={40}
                                height={40.14}
                            />
                            <Link href="/">
                                <p className={styles.HeaderLogoText}>
                                    판다마켓
                                </p>
                            </Link>
                        </div>
                        <div className={styles.HeaderNav}>
                            <div className={styles.HeaderNavBoard}>
                                <Link href="/Board">
                                    <p className={styles.HeaderNavBoardText}>
                                        자유게시판
                                    </p>
                                </Link>
                            </div>
                            <div className={styles.HeaderNavMarket}>
                                <Link href="/Market">
                                    <p className={styles.HeaderNavMarketText}>
                                        중고마켓
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.HeaderProfile}>
                        <Link href="/Profile">
                            <Image
                                src={profile}
                                alt="profile"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
