import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchThemes } from '../../features/themeSlice';
import Theme from '../Theme/Theme';
import styles from '../ThemeMap/thememap.module.css'

const ThemeMap = () => {
    const theme = useSelector((state) => state.themeSlice.themes)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchThemes())
    }, [dispatch])

    return (
        <div className={styles.themeMap}>
            {theme.map((elem) => {
                return <Theme themes={elem} />
            }).reverse()}
        </div>
    );
};

export default ThemeMap;