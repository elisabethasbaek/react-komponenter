import { useState, useEffect } from "react";
import "../style/TinyNews.css"; //css
import News from "./News"; //js

function TinyNews() {
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
            <section className="tinyNews">
                {content.map(function({image, heading}, i){
                    return <News image={image} heading={heading} key={i} />
                })}
            </section>
        </>
    )
};

export default TinyNews; 