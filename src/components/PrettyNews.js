import "../style/PrettyNews.css"; //css

function PrettyNews({image, heading, text}) {    
    return (
        <>
            <article className="prettyNews">
                <img src={image} alt="" className="prettyNews__image"/>
                <div className="prettyNews__textContainer">
                    <h1 className="prettyNews__heading">{heading}</h1>
                    <p className="prettyNews__text">{text}</p>
                </div>
            </article>
        </>
    )
};

export default PrettyNews;