import React from 'react';
import s from './Main.module.css'
import {ROUTES} from "../../common/enums/enums";
import {Button} from "../../common/components/button/Button";

export const Main = () => {

    return (
        <div className={s.main}>
            <div className={s.newsImageBox}>
                <img className={s.newsImage} src={'https://cdn-icons-png.flaticon.com/512/21/21601.png'} alt={"news' logo"}/>
            </div>
            <div className={s.textBox}>
                <h1>WELCOME TO OUR WEBSITE!</h1>
                <div>We're glad you're here</div>
                <Button name={'News'} route={ROUTES.NEWS} />
            </div>
        </div>
    );
};
