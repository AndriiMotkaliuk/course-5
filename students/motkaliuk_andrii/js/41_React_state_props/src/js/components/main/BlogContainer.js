import React from "react";
import BlogItem from "./BlogItem";

export default function Blog(colClass, blogTitle) {
    return (
        <div className={colClass}>
            <div className="blog">
                <h2 className="blog__title">{blogTitle}</h2>
                <BlogItem blogItemContent='Hello1' />
                <BlogItem blogItemContent='Hello2' />
                <BlogItem blogItemContent='Hello3' />
                <BlogItem blogItemContent='Hello4' />
            </div>
        </div>
    )
}
