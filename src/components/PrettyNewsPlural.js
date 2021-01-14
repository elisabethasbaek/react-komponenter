import { useState, useEffect } from "react";
import "../style/PrettyNewsPlural.css"; //css
import PrettyNews from "./PrettyNews"; //js

function PrettyNewsPlural() {
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
            <section className="prettyNewsPlural">
                {content.map(function({image, heading, text}, i){
                        return <PrettyNews image={image} heading={heading} text={text} key={i} />
                    })}
            </section>
        </>
    )
};

export default PrettyNewsPlural; 