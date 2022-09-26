import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../../features/cardSlice";
import CardOne from "./CardOne";
import styles from "./Card.module.css";
import { useState } from "react";
import Basket from "./img/Basket.png";
import { Dna } from "react-loader-spinner";

const Card = () => {
  const cards = useSelector((state) => state.cardSlice.cards);
  const loader = useSelector((state) => state.cardSlice.loader)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCard());
  }, [dispatch]);

  const [value, setValue] = useState("");
  const searchCards = cards.filter((card) => {
    return card.title.toLowerCase().includes(value.toLowerCase());
  });

  if (loader) {
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
    <div className={styles.things}>
      <div className={styles.searchAndBasket}>
        <div className={styles.form}>
          <input type="text" onChange={(e) => setValue(e.target.value)} />
        </div>
        <div className={styles.basket}>
          <div className={styles.basket_img}>
            <img src={Basket} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.things_list}>
        <div className={styles.things_list_things}>
          {searchCards.map((item, index) => {
            return <CardOne item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;