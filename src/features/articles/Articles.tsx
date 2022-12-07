import React, {useEffect, useState} from 'react';
import {Article, ArticleType} from './article/Article';
import s from './Articles.module.css';
import {Pagination} from "../../common/components/pagination/Pagination";
import {fetchNews} from "../../api/news-api";

type DataType = {
    articles: Array<ArticleType>
    status: string
    totalResults: number
    message?: string
}

export const Articles = () => {
    const [error, setError] = useState<string | undefined>('');
    const [loader, setLoader] = useState(false);
    const [news, setNews] = useState<Array<ArticleType>>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    useEffect( () => {
        (async ()=> {
            try {
                const data:DataType = await fetchNews(currentPage)
                if (data.status === 'ok') {
                setNews(data.articles);
                setTotalResults(data.totalResults)
                } else {
                    setError(data.message)
                }
            } catch (error) {
                setError(error as string)
            } finally {
                setLoader(true);
            }
        })()
    }, [currentPage])

    const onPageChangedHandler = (page: number) => {
        setCurrentPage(page)
    }

    if (error) {
        return <div><h2>Error:</h2> {error}</div>;
    } else if (!loader) {
        return <h2>Loading...</h2>;
    } else {
        return (
            <div>
                <Pagination totalCount={totalResults} pageSize={6} currentPage={currentPage}
                            onPageChangedHandler={onPageChangedHandler}/>
                <div className={s.articlesContainer}>
                    {
                        news.map((article, i) => {
                            return <Article
                                key={i}
                                article={article}
                            />
                        })
                    }
                </div>
            </div>
        );
    }
}

