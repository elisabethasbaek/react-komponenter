import "../style/NewYorkSimpleArticle.css"; //css

function NewYorkSimpleArticle({category, image, text}) {    
    return (
        <>
            <article className="newYorkSimpleArticle">
                <img src={image} alt="" className="newYorkSimpleArticle__image"/>
                <div className="newYorkSimpleArticle__textContainer">
                    <p className="newYorkSimpleArticle__category">{category}</p>
                    <p className="newYorkSimpleArticle__text">{text}</p>
                    <button className="newYorkSimpleArticle__readMore">Read More</button>
                </div>
            </article>
        </>
    )
};

export default NewYorkSimpleArticle;