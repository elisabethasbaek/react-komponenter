import { useState, useEffect } from "react";
import "../style/Articles.css"; //css
import Article from "./Article"; //js

function Articles() {
    var [content, setContent] = useState([]);

    useEffect(function () {
        fetch("./data/articles.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            setContent(data);
        });
    }, []);

    return (
        <>
            <section className="articles">
                {content.map(function({image, heading, text, category, thumb1, thumb2, thumb3}, i){
                    return <Article image={image} heading={heading} text={text} category={category} thumb1={thumb1} thumb2={thumb2} thumb3={thumb3} key={i} />
                })}
            </section>
        </>
    )
};

export default Articles; 