import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSignIn } from '../../features/applicationSlice';
import styles from '../Auth/auth.module.css';
import { Dna } from 'react-loader-spinner';

const SignIn = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState();
    const signingIn = useSelector((state) => state.applicationSlice.signingIn)
   
    const dispatch = useDispatch();

    const handleSetName = (e) => {
        setLogin(e.target.value);
    }

    const handleSetPass = (e) => {
        setPassword(e.target.value);
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        dispatch(authSignIn({ login, password }))
        setLogin('')
        setPassword('')
    }

    if (signingIn) {
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
        <div className={styles.login}>
            <div className={styles.loginScreen}>
                <div className={styles.appTitle}>
                    <h1>Вход в аккаунт</h1>
                </div>
                <div className={styles.loginForm}>
                    <div className={styles.controlGroup}>
                        <form onSubmit={handleSignIn}>
                            <input
                                id="login-name"
                                className={styles.loginField}
                                type='text'
                                value={login}
                                placeholder='логин'
                                onChange={handleSetName}
                            />
                        </form>
                    </div>
                    <br />
                    <div className={styles.controlGroup}>
                        <form>
                            <input
                                id="login-pass"
                                className={styles.loginField}
                                type='password'
                                value={password}
                                placeholder='пароль'
                                onChange={handleSetPass}
                            />
                            <br />
                            <button className={styles.btn} type='submit' onClick={handleSignIn}>Войти</button>
                            <a className={styles.loginLink} href="intoco.ru">Забыли свой пароль?</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;