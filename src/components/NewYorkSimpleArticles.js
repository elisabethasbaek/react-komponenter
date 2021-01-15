import { useState, useEffect } from "react";
import "../style/NewYorkSimpleArticles.css"; //css
import NewYorkSimpleArticle from "./NewYorkSimpleArticle"; //js

function NewYorkSimpleArticles() {
    var [content, setContent] = useState([]);

    useEffect(function () {
        fetch("./data/articlesTwo.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            setContent(data);
        });
    }, []);

    return (
        <>
            <section className="newYorkSimpleArticles">
                {content.map(function({category, image, text}, i){
                        return <NewYorkSimpleArticle category={category} image={image} text={text} key={i} />
                    })}
            </section>
        </>
    )
};

export default NewYorkSimpleArticles; 