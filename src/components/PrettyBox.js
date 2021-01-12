import "../style/PrettyBox.css"; //css

function PrettyBox({image, heading, text}) {    
    return (
        <>
            <article className="prettyBox">
                <img src={image} alt="" className="prettyBox__image"/>
                <h1 className="prettyBox__heading">{heading}</h1>
                <p className="prettyBox__text">{text}</p>
            </article>
        </>
    )
};

export default PrettyBox;