import { useState, useEffect } from "react";
import "../style/StandAloneNews.css"; //css
import News from "./News"; //js

function StandAloneNews() {
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
            <section className="standAloneNews">
                {content.map(function({image, heading, text}, i){
                        return <News image={image} heading={heading} text={text} key={i} />
                    })}
            </section>
        </>
    )
};

export default StandAloneNews; 