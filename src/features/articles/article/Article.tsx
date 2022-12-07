import React from 'react';
import {Button} from "../../../common/components/button/Button";
import s from "./Article.module.css"

type PropsType = {
    article: ArticleType
    key: number
}

export type ArticleType = {
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: {
        id: string,
        name: string
    },
    title: string,
    url: string,
    urlToImage: string
}

export const Article: React.FC<PropsType> = ({article}) => {

    const {author, description, title, url, urlToImage} = article

    return (
        <div className={s.articleContainer}>
            <h3>{title}</h3>
            <img className={s.image} src={urlToImage} alt={title}/>
            <div>
            <a href={url}><Button name={'Read more'}/></a>
            <p>{description}</p>
                <div>{author}</div>
            </div>

        </div>
    );
};
