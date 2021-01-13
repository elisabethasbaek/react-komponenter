import { useState, useEffect } from "react";
import "../style/NewsDigest.css"; //css
import News from "./News"; //js

function NewsDigest() {
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
            <section className="newsDigest">
                <h1 className="newsDigest__heading">News Digest</h1>

                {content.map(function({image, heading, text}, i){
                    return <News image={image} heading={heading} text={text} key={i} />
                })}
            </section>
        </>
    )
};

export default NewsDigest; 