import { useState } from "react";
import styles from "./Maps.module.css";
import Modal from "./modalWindow/Modal";

import Roh_img from "./img/Rohan.jpg";
import Gon_img from "./img/Gondor.jpg";
import Mor_img from "./img/Mordor.jpg";

import Vsa_img from "./img/Vsadnik.jpg";
import Ork_img from "./img/Ork.jpg";
import Frodo_img from "./img/Frodo.jpg";
import Sword_img from "./img/Sword.png";
import Ring_img from "./img/Ring.png";

const Maps = () => {

  const [modalActive, setModalActive] = useState(false)

  const [Rohan, setRohan] = useState(false);
  const [Gondor, setGondor] = useState(false);
  const [Mordor, setMordor] = useState(false);

  const [Road, setRoad] = useState(false);
  const [Fight, setFight] = useState(false);
  const [Get, setGet] = useState(false);
  const [Get_City, setGet_City] = useState(false);

  const [Frodo_info, setFrodo_info] = useState('');
  const [Vsadnik_info, setVsadnik_info] = useState('');
  const [Ork_info, setOrk_info] = useState('');
  const [Rohan_info, setRohan_info] = useState('');
  const [Gondor_info, setGondor_info] = useState('');
  const [Mordor_info, setMordor_info] = useState('');

  const AllCityGet = () => {
    setGet_City(true)
  };

  const RoadFrodo = () => {
    setRoad(true);
  };

  const FightGondor = () => {
    setFight(true);
  };

  const AllUnitsGet = () => {
    setGet(true);
  };

  const HandleFrodo = () => {
    setModalActive(true);
    setFrodo_info(
      <div className={styles.modal_card}>
        <div className={styles.modal_card_img}>
          <img src={Frodo_img} alt="" />
        </div>
        <div className={styles.modal_card_text}>
          <p>Фродо - выдающийся хоббит из Шира, единственный сын Дрого Бэггинса и Примулы Брендибак, племянник Бильбо Бэггинса. Фродо стал хранителем Единого Кольца, которое разыскивал Тёмный Властелин Саурон, чтобы с его помощью обрести полное могущество. Один из главных героев.</p>
        </div>
      </div>
    )
    setOrk_info('')
    setVsadnik_info('')
    setMordor_info('')
    setGondor_info('')
    setRohan_info('')
  }

  const HandleOrk = () => {
    setModalActive(true);
    setOrk_info(
      <div className={styles.modal_card}>
        <div className={styles.modal_card_img}>
          <img src={Ork_img} alt="" />
        </div>
        <div className={styles.modal_card_text}>
          <p>Орки - злобный, варварский народ, подчинявшийся Тёмному Властелину. Были выведены падшим Вала Мелькором из захваченных эльфов при помощи чёрной магии. Позднее стали самостоятельным народом Средиземья, всегда служившим Тьме и отличавшимся злобным нравом.</p>
        </div>
      </div>
    )
    setFrodo_info('')
    setVsadnik_info('')
    setMordor_info('')
    setGondor_info('')
    setRohan_info('')
  }

  const HandleVsadnik = () => {
    setModalActive(true);
    setVsadnik_info(
      <div className={styles.modal_card}>
        <div className={styles.modal_card_img}>
          <img src={Vsa_img} alt="" />
        </div>
        <div className={styles.modal_card_text}>
          <p>Всадники - войска, служащие королю Рохана и охраняющие роханские границы, а также отстаивающие его интересы. Они являются всеобще признанными мастерами-коневодами, и главной силой их войска всегда являлась кавалерия, которая пронзает линию обороны противника.</p>
        </div>
      </div>
    )
    setFrodo_info('')
    setOrk_info('')
    setMordor_info('')
    setGondor_info('')
    setRohan_info('')
  }

  const HandleMordor = () => {
    setModalActive(true);
    setMordor_info(
      <div className={styles.modal_card}>
        <div className={styles.modal_card_img}>
          <img src={Mor_img} alt="" />
        </div>
        <div className={styles.modal_card_text}>
          <p>Мордор - область на юго-востоке Средиземья, королевство Тёмного Властелина Саурона. Появление Мордора было последствием разрушительных действий Моргота, очевидно сформированный массивными вулканическими извержениями. Мордор находился под властью Саурона.</p>
        </div>
      </div>
    )
    setOrk_info('')
    setVsadnik_info('')
    setGondor_info('')
    setRohan_info('')
    setFrodo_info('')
  }

  const HandleGondor = () => {
    setModalActive(true);
    setGondor_info(
      <div className={styles.modal_card}>
        <div className={styles.modal_card_img}>
          <img src={Gon_img} alt="" />
        </div>
        <div className={styles.modal_card_text}>
          <p>Гондор -  южное королевство людей-дунэдайн в Средиземье, основанное в конце Второй Эпохи верными нуменорцами. Правление Гондором он поручил сыну Анариона, Менелдилю. Исильдур погиб по дороге в Арнор, и Гондор полностью остался за родом Анариона.</p>
        </div>
      </div>
    )
    setOrk_info('')
    setVsadnik_info('')
    setMordor_info('')
    setRohan_info('')
    setFrodo_info('')
  }

  const HandleRohan = () => {
    setModalActive(true);
    setRohan_info(
      <div className={styles.modal_card}>
        <div className={styles.modal_card_img}>
          <img src={Roh_img} alt="" />
        </div>
        <div className={styles.modal_card_text}>
          <p>Рохан - королевство людей-северян, основанное в Третью Эпоху на равнинах Каленардона народом Эотеод под предводительством Эорла Юного, ставшего первым королём Рохана и поклявшегося в вечном союзе с южным королевством дунэдайн Гондором как в мирное, так и в немирное время.</p>
        </div>
      </div>
    )
    setOrk_info('')
    setVsadnik_info('')
    setMordor_info('')
    setGondor_info('')
    setFrodo_info('')
  }

  return (
    <div className={styles.Maps_page}>
      <div className={styles.Maps_page_text}>
        <p>Карта Средиземья</p>
      </div>
      <div className={styles.Maps}>
        <div class={styles.dropdown}>
          <button class={styles.dropbtn}>
            Интерфейс
          </button>
          <div class={styles.dropdown_content}>
            <button onClick={AllCityGet}>Показать все локации</button>
            <button onClick={AllUnitsGet}>
              Показать всех юнитов
            </button>
          </div>
        </div>

        <div class={styles.dropdown_two}>
          <button class={styles.dropbtn_two}>
            События
          </button>
          <div class={styles.dropdown_content_two}>
            <button onClick={RoadFrodo}>Показать полный путь Фродо</button>
            <button onClick={FightGondor}>
              Показать место сражения в Гондоре
            </button>
          </div>
        </div>

        <button className={styles.Rohan}></button>
        {Rohan}
        <button className={styles.Gondor}></button>
        {Gondor}
        <button className={styles.Mordor}></button>
        {Mordor}

        <button
          className={Fight ? styles.Vsadnik_finish : styles.Vsadnik}
        ></button>
        {Get ? (
          <div
            className={Fight ? styles.Vsadnik_card_finish : styles.Vsadnik_card}
          >
            <div className={styles.Vsadnik_card_img}>
              <img src={Vsa_img} alt="#" />
            </div>
            {Fight ? (
              <div className={styles.Vsadnik_card_img_sword}>
                <img src={Sword_img} alt="#" />
              </div>
            ) : null}
            <div className={styles.Vsadnik_card_text} onClick={HandleVsadnik}>
              <p>Подробнее</p>
            </div>
          </div>
        ) : null}

        <button className={Fight ? styles.Ork_finish : styles.Ork}></button>
        {Get ? (
          <div className={Fight ? styles.Ork_card_finish : styles.Ork_card}>
            <div className={styles.Ork_card_img}>
              <img src={Ork_img} alt="#" />
            </div>
            <div className={styles.Ork_card_text} onClick={HandleOrk}>
              <p>Подробнее</p>
            </div>
          </div>
        ) : null}

        <button className={Road ? styles.Frodo_finish : styles.Frodo}></button>
        {Get ? (
          <div className={Road ? styles.Frodo_card_finish : styles.Frodo_card}>
            <div className={styles.Frodo_card_img}>
              <img src={Frodo_img} alt="#" />
            </div>
            {Road ? (
              <div className={styles.Frodo_card_img_sword}>
                <img src={Ring_img} alt="#" />
              </div>
            ) : null}
            <div className={styles.Frodo_card_text} onClick={HandleFrodo}>
              <p>Подробнее</p>
            </div>
          </div>
        ) : null}

        {Get_City ? (
        <div className={styles.Rohan_card}>
          <div className={styles.Rohan_card_img}>
            <img src={Roh_img} alt="#" />
          </div>
          <div className={styles.Rohan_card_text}>
            <p>Рохан</p>
          </div>
          <div className={styles.Rohan_card_btn}>
            <button onClick={HandleRohan}>Подробнее</button>
          </div>
        </div>
        ) : null}

        {Get_City ? (
        <div className={styles.Gondor_card}>
          <div className={styles.Gondor_card_img}>
            <img src={Gon_img} alt="#" />
          </div>
          <div className={styles.Gondor_card_text}>
            <p>Гондор</p>
          </div>
          <div className={styles.Gondor_card_btn}>
            <button onClick={HandleGondor}>Подробнее</button>
          </div>
        </div>
        ) : null}

        {Get_City ? (
        <div className={styles.Mordor_card}>
          <div className={styles.Mordor_card_img}>
            <img src={Mor_img} alt="#" />
          </div>
          <div className={styles.Mordor_card_text}>
            <p>Мордор</p>
          </div>
          <div className={styles.Mordor_card_btn}>
            <button onClick={HandleMordor}>Подробнее</button>
          </div>
        </div>
        ) : null}

      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        {Frodo_info}
        {Ork_info}
        {Vsadnik_info}
        {Mordor_info}
        {Gondor_info}
        {Rohan_info}
      </Modal>

    </div>
  );
};

export default Maps;