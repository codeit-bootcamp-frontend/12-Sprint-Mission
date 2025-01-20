// src/components/ui/navigation/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // React Router에서 Link 컴포넌트 import
import styles from './Navigation.module.css'; // CSS 모듈 import

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link to="/">Home</Link> {/* Home 페이지로 이동하는 링크 */}
                </li>
                <li>
                    <Link to="/about">About</Link> {/* About 페이지로 이동하는 링크 */}
                </li>
                <li>
                    <Link to="/services">Services</Link> {/* Services 페이지로 이동하는 링크 */}
                </li>
                <li>
                    <Link to="/contact">Contact</Link> {/* Contact 페이지로 이동하는 링크 */}
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
