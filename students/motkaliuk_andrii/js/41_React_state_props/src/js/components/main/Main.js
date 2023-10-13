import React from "react";
import Blog from "./BlogContainer";
import News from "./NewsContainer";

export default function Main() {

    return (
        <main>
            <section className="banner">
                <div className="container">
                    Full-width banner image
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <Blog colClass="col-8" blogTitle="Blog" />
                    <News colClass="col-4" newsTitle="News" />
                </div>
            </div>
        </main>
    )
}
