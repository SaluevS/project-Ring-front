import { Link } from 'react-router-dom';
import styles from '../Home/Home.module.css'
import vid from "../Home/video/8683.MP4"
import logo from "../Home/video/logos.png"

const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.Header}>
                <Link to="/theme" className={styles.link}>Форум</Link>
                <Link to="/chat" className={styles.link}>Чат</Link>
                <Link to="/" className={styles.link}> <img src={logo} alt="q" /> </Link>
                <Link to="/cart" className={styles.link}> Карта </Link>
                <Link to="/shop" className={styles.link}>Мaгазин</Link>
            </div>
            <video autoPlay muted loop>
                <source src={vid} type="video/mp4"/>
            </video>
            <div className={styles.main}>
                <Link to="/theme" className={styles.ll}><button> Перейте к Форуму </button></Link>
                <Link to="/cart" className={styles.ll}><button> Открыть карту </button></Link>
            </div>
        </div>
    );
};

export default Home;