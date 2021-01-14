import "../style/Gallery.css"; //css
import { useState, useEffect } from "react";

function Gallery() {    
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
        <article className="gallery">
            {content.map(function({category, image, heading, text}, i){
                return (
                    <div key={i}>
                        <img src={image} alt="" className="gallery__image"/>
                        <h1 className="gallery__heading">{heading}</h1>
                        <p className="gallery__category">{category}</p>
                        <p className="gallery__text">{text}</p>
                    </div>
                    )
            })}
        </article>
    )
};

export default Gallery;