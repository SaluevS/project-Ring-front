import React from 'react';
import styles from '../Theme/theme.module.css';
import { Link } from 'react-router-dom'

const Theme = ({ themes }) => {
    return (
        <div className={styles.mainTheme}>
            <div className={styles.themeImage}>
                <img className={styles.themeImg} src='https://images3.alphacoders.com/855/85585.jpg' />
            </div>
            <div>
                <h3>{themes.name}</h3>
                <h3>{themes.text}</h3>
            </div>
            <div className={styles.mainButtonTheme}>
                <Link className={styles.linkDisc} to={themes._id}><button className={styles.buttonTheme}>Перейти к обсуждению</button></Link>
            </div>
        </div>
    );
};

export default Theme;