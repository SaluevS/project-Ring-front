import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchThemes } from "../../features/themeSlice";
import {
    addComment,
    addLike,
    delComment,
    delLike,
    fetchComments,
} from "../../features/commentSlice";
import styles from "../ThemeOne/themeOne.module.css";
import { useState } from "react";
import Header2 from "../Header2/Header2";
import { Dna } from "react-loader-spinner";

const ThemeOne = () => {
    const [comm, setComm] = useState("");
    const [like, setLike] = useState(true);
    const { id } = useParams();
    const themes = useSelector((state) => state.themeSlice.themes);
    const comments = useSelector((state) => state.commentSlice.comments);
    const userId = useSelector((state) => state.applicationSlice.login1);
    const loading = useSelector((state) => state.themeSlice.loading);
    const dispatch = useDispatch();

    const filteredThemes = themes.filter((elem) => {
        if (!id) return true;

        return id === elem._id;
    });

    const filteredComms = comments.filter((item) => {
        console.log(item.theme._id);
        if (!id) return true;

        return id === item.theme._id;
    });

    const handleChange = (e) => {
        setComm(e.target.value);
    };

    useEffect(() => {
        dispatch(fetchThemes());
        dispatch(fetchComments());
    }, [dispatch]);

    const handleAddComment = () => {
        dispatch(addComment({ comm, id, userId }));
        setComm('')
    };

    const handleDelComment = (item) => {
        if (userId === item.user._id)
            dispatch(delComment(item))
    }

    const handleAddLike = (userId, commId) => {
        if (like) {
            dispatch(addLike({ userId, commId }));
            setLike(false);
        }
        if (!like) {
            dispatch(delLike({ userId, commId }));
            setLike(true);
        }
    };

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

        <>
            <div className={styles.w}>
                <div className={styles.One}>
                    {filteredThemes.map((elem) => {
                        return (
                            <div className={styles.theme}>
                                <div className={styles.blocks}>
                                    <div className={styles.title}>{elem.name}</div>
                                    <div className={styles.text}>{elem.text}</div>
                                </div>
                                <div className={styles.blocks}>
                                    <img
                                        src={`http://localhost:3400/images/${elem.image}`}
                                        alt="q"
                                    />
                                </div>
                            </div>
                        );
                    })}
                    <div className={styles.commMain}>
                        <input
                            className={styles.inputComm}
                            value={comm}
                            placeholder='Написать комментарий...'
                            onChange={handleChange}
                        />
                        <button className={styles.buttonComm} onClick={handleAddComment} disabled={!comm}>
                            Добавить
                        </button>
                    </div>
                    {filteredComms
                        .map((item) => {
                            return (
                                <div className={styles.commit}>
                                    <div>
                                        <h3>{item.user.login}</h3>
                                    </div>
                                    <div className={styles.coms}>
                                        <div className={styles.textCo}>{item.text}</div>
                                        <div className={styles.cos}><button
                                            className={styles.buttonLike}
                                            onClick={() => handleAddLike(userId, item._id)}
                                        >
                                            ❤️
                                        </button>
                                            {item.like.length}
                                            <button className={styles.delcomment} onClick={() => handleDelComment(item)}>x</button></div>
                                    </div>
                                </div>
                            );
                        })
                        .reverse()}
                </div>
            </div>
        </>
    );
};

export default ThemeOne;