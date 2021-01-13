import { useState, useEffect } from "react";
import "../style/LatestNews.css"; //css
import News from "./News"; //js

function LatestNews() {
    var [content, setContent] = useState([]);

    useEffect(function () {
        fetch("./data/news.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            setContent(data);
        });
    }, []);

    return (
        <>
            <section className="latestNews">
                <h1 className="latestNews__heading">Latest news</h1>

                {content.map(function({image, heading, text}, i){
                    return <News image={image} heading={heading} text={text} key={i} />
                })}

                <p className="latestNews__moreNews">More news</p>
            </section>
        </>
    )
};

export default LatestNews; 