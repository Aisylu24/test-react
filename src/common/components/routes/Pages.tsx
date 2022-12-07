import React from 'react';
import {Main} from "../../../features/main/Main";
import {Routes, Route, Navigate} from 'react-router-dom'
import s from "./Pages.module.css"
import {Articles} from "../../../features/articles/Articles";

export const Pages = () => {
    return (
        <div className={s.pages}>
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'news'} element={<Articles/>}/>
            <Route path='404' element={<h1>404: PAGE NOT FOUND</h1>}/>
            <Route path='/*' element={<Navigate to='404'/>}/>
        </Routes>
        </div>
    );
};
