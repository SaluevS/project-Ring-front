import React from "react";
import styles from "../Theme/theme.module.css";
import PropTypes from 'prop-types'

const Theme = ({ themes }) => {
  return (
    <div className={styles.mainTheme}>
      <div className={styles.themeImage}>
        <img
          className={styles.themeImg}
          src={`http://localhost:3400/images/${themes.image}`}
          alt="q"
        />
      </div>
      <div className={styles.title}>
        <h3>{themes.name}</h3>
      </div>
    </div>
  );
};

Theme.propTypes = {
  themes: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
  }).isRequired
}

export default Theme;
