import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {ROUTES} from '../../enums/enums'


export const Header = () => {
    return (
        <ul className={s.header}>
            <li>
                <NavLink to={ROUTES.MAIN} title={'Main'} className={s.link}>Main</NavLink>
            </li>
            <li>
                <NavLink to={ROUTES.NEWS} title={'News'} className={s.link}>News</NavLink>
            </li>
        </ul>
    );
};

