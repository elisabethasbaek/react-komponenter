import "../style/Article.css"; //css

function Article({image, category, heading, text, thumb1, thumb2, thumb3}) { 
    return (
        <>
            <article className="article">
                <img src={image} alt="" className="article__image" />
                <h2 className="article__category">{category}</h2>
                <h1 className="article__heading">{heading}</h1>
                <p className="article__text">{text}</p>
                <section className="article__thumbnails">
                    <img src={thumb1} alt="" className="thumbnail1" />
                    <img src={thumb2} alt="" className="thumbnail2" />
                    <img src={thumb3} alt="" className="thumbnail3" />
                </section>
            </article>
        </>
    )
};

export default Article;