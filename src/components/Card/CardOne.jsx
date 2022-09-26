import React from "react";
import PropTypes from "prop-types";
import styles from "./CardOne.module.css";

const CardOne = ({ item }) => {
  return (
    <div className={styles.thing_card}>
      <div className={styles.thing_card_img}>
        <img src={`http://localhost:3400/images/${item.image}`} alt="" />
      </div>
      <div className={styles.thing_card_text}>
        <div className={styles.thing_card_title}>{item.title}</div>
        <div className={styles.thing_card_price}>{item.price} $</div>
      </div>
      
    </div>
  );
};

CardOne.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardOne;
