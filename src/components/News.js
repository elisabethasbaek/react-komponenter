import "../style/News.css"; //css

function News({image, heading, text}) {    
    return (
        <>
            <article className="news">
                <img src={image} alt="" className="news__image"/>
                <h1 className="news__heading">{heading}</h1>
                <p className="news__text">{text}</p>
            </article>
        </>
    )
};

export default News;