import { Link } from "react-router-dom";
import styles from "../Home/Home.module.css";
import vid from "../Home/video/2323.mp4";

const Home = () => {
  return (
    <div className={styles.Home}>
      <video autoPlay muted loop>
        <source src={vid} type="video/mp4" />
      </video>
      <div className={styles.main}>
        <Link to="/discussions" className={styles.ll}>
          <button> Перейте к Форуму </button>
        </Link>
        <Link to="/cart" className={styles.ll}>
          <button> Открыть карту </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
