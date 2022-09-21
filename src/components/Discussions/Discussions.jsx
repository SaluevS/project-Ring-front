import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTheme, fetchThemes } from '../../features/themeSlice';
import styles from '../Discussions/discussions.module.css'
import ThemeMap from '../ThemeMap/ThemeMap';

const Discussions = () => {
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const userId = useSelector((state) => state.applicationSlice.login1)

    const dispatch = useDispatch()

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        dispatch(fetchThemes())
    }, [dispatch])

    const handleAdd = () => {
        dispatch(addTheme({ name, text, userId }))
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.inputButton}>
                    <div className={styles.inputs}>
                        <input className={styles.inputDisc} placeholder='Тема' value={name} onChange={handleName} />
                        <input className={styles.inputDisc} placeholder='Текст' value={text} onChange={handleText} />
                    </div>
                    <button className={styles.buttonDisc} onClick={handleAdd}>Добавить</button>
                </div>
            </div>
            <ThemeMap />
        </>
    );
};

export default Discussions;