import "../style/VirtualReality.css"; //css
import { useState, useEffect } from "react";

function VirtualReality() {    
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
        <article className="virtualReality">
            {content.map(function({image, heading}, i){
                return (
                    <div key={i}>
                        <img src={image} alt="" className="virtualReality__image"/>
                        <h1 className="virtualReality__heading">Virtual Reality</h1>
                        <p className="virtualReality__category">{heading}</p>
                    </div>
                    )
            })}
        </article>
    )
};

export default VirtualReality;