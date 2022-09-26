import React, { useCallback, useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTheme, fetchThemes } from "../../features/themeSlice";
import styles from "../Discussions/discussions.module.css";
import ThemeMap from "../ThemeMap/ThemeMap";
import axios from "axios";
import { motion } from "framer-motion";

const Discussions = () => {
  const [img, setImage] = useState();
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const userId = useSelector((state) => state.applicationSlice.login1);

  const carousel = useRef();

  const dispatch = useDispatch();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchThemes());
  }, [dispatch]);

  const handleAdd = () => {
    dispatch(addTheme({ name, text, userId, avatar }));
    setName("");
    setText("");
  };

  const sendFile = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const data = new FormData();
        data.append("avatar", img);

        await axios
          .post("/upload", data, {
            headers: {
              "content-type": "multipart/form-data",
            },
          })

          .then((res) => setAvatar(res.data.originalname));
      } catch (e) {
        console.log(e);
      }
    },
    [img]
  );

  return (
    <div className={styles.blocks}>
      <div className={styles.main}>
        <div className={styles.inputButton}>
          <div className={styles.inputs}>
            <input
              className={styles.inputDisc}
              placeholder="Тема"
              value={name}
              onChange={handleName}
            />
            <input
              className={styles.inputDisc}
              placeholder="Текст"
              value={text}
              onChange={handleText}
            />
            <div className={styles.mainPhoto}>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className={styles.inputPhoto}
              />
              <button className={styles.fileButton} onClick={sendFile}>
                Добавить фото
              </button>
            </div>
          </div>
          <button
            className={styles.buttonDisc}
            onClick={handleAdd}
            disabled={!name || !text}
          >
            Опубликовать тему
          </button>
        </div>
      </div>
      <div ref={carousel} className={styles.one}>
        <div className={styles.two}>
          <ThemeMap />
        </div>
      </div>
    </div>
  );
};

export default Discussions;
