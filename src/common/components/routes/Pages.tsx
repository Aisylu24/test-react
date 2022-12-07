import React from 'react';
import {Main} from "../../../features/main/Main";
import {Routes, Route, Navigate} from 'react-router-dom'
import s from "./Pages.module.css"
import {Articles} from "../../../features/articles/Articles";
import {ROUTES} from "../../enums/enums";

export const Pages = () => {
    return (
        <div className={s.pages}>
        <Routes>
            <Route path={ROUTES.MAIN} element={<Main/>}/>
            <Route path={ROUTES.NEWS} element={<Articles/>}/>
            <Route path={ROUTES.ERROR} element={<h1>404: PAGE NOT FOUND</h1>}/>
            <Route path='/*' element={<Navigate to={ROUTES.ERROR}/>}/>
        </Routes>
        </div>
    );
};
