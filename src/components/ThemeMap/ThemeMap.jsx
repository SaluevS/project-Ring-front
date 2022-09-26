import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchThemes } from "../../features/themeSlice";
import Theme from "../Theme/Theme";
import styles from "../ThemeMap/thememap.module.css";
import { Dna } from "react-loader-spinner";

const ThemeMap = () => {
  const theme = useSelector((state) => state.themeSlice.themes);
  const loading = useSelector((state) => state.themeSlice.loading)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchThemes());
  }, [dispatch]);

  if (loading) {
    return <div className={styles.tri}>
      <Dna
        visible={true}
        height="150"
        width="200"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  }

      return (
      <div className={styles.themeMap}>
        {theme
          .map((elem) => {
            return (
              <div className={styles.themeMapCard}>
                <Link to={elem._id} className={styles.li}>
                  <Theme themes={elem} />
                </Link>
              </div>
            );
          })
          .reverse()}
      </div>
      );
};

export default ThemeMap;
