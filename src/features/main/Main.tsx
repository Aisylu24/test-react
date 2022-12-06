import React from 'react';
import s from './Main.module.css'
import { useNavigate } from "react-router-dom";
import {ROUTES} from "../../common/enums/enums";

export const Main = () => {

    let navigate = useNavigate();

    const navigateHandler = () => {
     navigate(ROUTES.NEWS)
    }

    return (
        <div className={s.main}>
            <div className={s.newsImageBox}>
                <img className={s.newsImage} src={'https://cdn-icons-png.flaticon.com/512/21/21601.png'} alt={"news' logo"}/>
            </div>
            <div className={s.textBox}>
                <h1>WELCOME TO OUR WEBSITE!</h1>
                <div>We're glad you're here</div>
                <button className={s.button} onClick={navigateHandler}>News</button>
            </div>
        </div>
    );
};
