import { useState, useEffect } from "react";
import "../style/Collections.css"; //css
import Collection from "./Collection"; //js

function Collections() {
    var [content, setContent] = useState([]);

    useEffect(function () {
        fetch("./data/collections.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            setContent(data);
        });
    }, []);

    return (
        <>
            <section className="collections">
                {content.map(function({category, image, authorimage, heading, author}, i){
                        return <Collection category={category} image={image}  authorimage={authorimage} heading={heading} author={author} key={i} />
                    })}
            </section>
        </>
    )
};

export default Collections; 