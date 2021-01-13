import "../style/Collection.css"; //css

function Collection({category, image, authorimage, heading, author}) {    
    return (
        <>
            <article className="collection">
                <img src={image} alt="" className="collection__image"/>
                <p className="collection__category">{category}</p>
                <img src={authorimage} alt="" className="collection__authorimage"/>
                <h1 className="collection__heading">{heading}</h1>
                <p className="collection__author">{author}</p>
            </article>
        </>
    )
};

export default Collection;