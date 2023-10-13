import React from "react";
import NewsItem from "./NewsItem";

export default function News({ colClass, newsTitle }) {
    return (
        <div className={colClass}>
            <div className="news">
                <h2 className="news__title">{newsTitle}</h2>
                <NewsItem newsItemContent='Good bye 1' />
                <NewsItem newsItemContent='Good bye 2' />
                <NewsItem newsItemContent='Good bye 3' />
                <NewsItem newsItemContent='Good bye 4' />
            </div>
        </div>
    )
}
