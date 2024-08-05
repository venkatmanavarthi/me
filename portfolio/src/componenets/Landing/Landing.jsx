import React, { useContext } from 'react';
import styles from './Landing.module.css';
import avatar from '../../assets/avatar.png';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import light from '../../assets/light.svg';
import dark from '../../assets/dark.svg'

import { ThemeContext } from '../../common/ThemeContext';

function Landing() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const themeIcon = theme === "light" ? dark : light;

    return (
        <section id="landing">
            <div className=''>
                <img className={styles.avatar} src={avatar} alt="Profile Picture of Venkat Rao Manavarthi" />
                <img className={styles.themeAvatar} src={themeIcon} alt="Color Mode Icon" onClick={toggleTheme} />
            </div>
            <div className={styles.info}>
                <h1>Venkat Rao Manavarthi</h1>
                <h2>Software Engineer</h2>
                <span>
                    <a href="https://www.linkedin.com/in/venkatrao-manavarthi" target='_blank'>
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/venkatmanavarthi" target='_blank'>
                        <img src={github} alt="GitHub" />
                    </a>
                </span>
                <p>
                    I am a Software Engineer with over 3 years of experience in designing, developing, testing, and deploying production-level applications with a focus on customer satisfaction. Currently, I am leading an agility team at the University of Missouri - Kansas City, where we are building 5G-based testbeds to support various autonomous 5G test cases.
                </p>
            </div>
        </section>
    )
}

export default Landing