import styles from '../Header/Header.module.css';
import { Link } from 'react-router-dom';
import logo from '../Header/imgs/logos.png'
import { useSelector } from 'react-redux';

const Header = () => {
    const token = useSelector((state) => state.applicationSlice.token)

    const handleClean = () => {
        window.location.reload()
        localStorage.clear()
    }
    return (
        <div className={styles.mainOfMain}>
            <div className={styles.Header}>
                <Link to="/discussions" className={styles.link}>Форум</Link>
                <Link to="/chat" className={styles.link}>Чат</Link>
                <Link to="/" className={styles.link}> <img src={logo} alt="q" /> </Link>
                <Link to="/cart" className={styles.link}> Карта </Link>
                <Link to="/shop" className={styles.link1}>Мaгазин</Link>
            </div>
            {token
                ?
                <div className={styles.mainExit}>
                    <Link className={styles.exit} to='/auth' onClick={handleClean}>Выход</Link>
                </div>
                :
                <div className={styles.mainEntry}>
                    <Link className={styles.entry} to='/login'>Вход</Link>
                    <Link className={styles.entry} to='/auth'>Зарегистрироваться</Link>
                </div>
            }
        </div>
    );
};

export default Header;