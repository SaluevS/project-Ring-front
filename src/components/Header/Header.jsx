import styles from '../Header/Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../Header/imgs/logos.png'

const Header = () => {
    return (
        <div className={styles.Header}>
                <Link to="/theme" className={styles.link}>Форум</Link>
                <Link to="/chat" className={styles.link}>Чат</Link>
                <Link to="/" className={styles.link}> <img src={logo} alt="q" /> </Link>
                <Link to="/cart" className={styles.link}> Карта </Link>
                <Link to="/shop" className={styles.link}>Мaгазин</Link>
            </div>
    );
};

export default Header;