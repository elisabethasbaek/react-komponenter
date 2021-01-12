import { useState, useEffect } from "react";
import "../style/PrettyBoxes.css"; //css
import PrettyBox from "./PrettyBox"; //js

function PrettyBoxes() {
    var [content, setContent] = useState([]);

    useEffect(function () {
        fetch("./data/prettyboxes.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            setContent(data);
        });
    }, []);

    return (
        <>
            <section className="prettyBoxes">
                {content.map(function({image, heading, text}, i){
                        return <PrettyBox image={image} heading={heading} text={text} key={i} />
                    })}
            </section>
        </>
    )
};

export default PrettyBoxes; 