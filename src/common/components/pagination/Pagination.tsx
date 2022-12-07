import React from 'react';
import s from "./Pagination.module.css";


type PaginationPropsType = {
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChangedHandler: (page: number) => void
}

export const Pagination: React.FC<PaginationPropsType> = ({totalCount,pageSize, currentPage, onPageChangedHandler}) => {

    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
         if (pages.length < 15)
        pages.push(i)
    }

    let curP = currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div className={s.pages}>
            {
                slicedPages.map(page => {

                    let finalClass = `${s.span} ${currentPage === page ? s.selected : ""}`

                    return <span key={page} className={finalClass}
                                 onClick={(e) => {
                                     onPageChangedHandler(page)
                                 }}>{page}</span>
                })
            }
        </div>
    )
}