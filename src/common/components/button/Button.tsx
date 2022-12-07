import React from 'react';
import {useNavigate} from "react-router-dom";
import s from './Button.module.css'

type PropsType = {
    name: string
    route?: string
    onClickHandler?: () => void
}

export const Button:React.FC<PropsType> = ({name,route, onClickHandler}) => {

    let navigate = useNavigate();

    const navigateHandler = () => {
        if (route) {
            navigate(route)
        }
    }

    const onClick = route ? navigateHandler : onClickHandler

    return <button className={s.button} onClick={onClick}>{name}</button>
};

