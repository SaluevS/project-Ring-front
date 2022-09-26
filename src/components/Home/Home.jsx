import { Link } from "react-router-dom";
import styles from "../Home/Home.module.css";
import LOTR_1 from "../Home/video/LOTR_1.mp4";

const Home = () => {
  return (
    <>
      <div className={styles.Home}>
        <video autoPlay muted loop>
          <source src={LOTR_1} type="video/mp4" />
        </video>
      </div>
      {/* <div className={styles.all_footer}>
        <div className={styles.footer_text}>
          <p>© Футер чуть позже добью</p>
        </div>
        <div className={styles.footer_WB}>
          <img src="" alt="" />
        </div>
        <div className={styles.footer_NL}>
          <img src="" alt="" />
        </div>
      </div> */}
    </>
  );
}

export default Home