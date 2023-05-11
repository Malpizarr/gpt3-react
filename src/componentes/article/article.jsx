import React from 'react';
import './article.css';
const Article = ({imgUrl, fecha, titulo}) => {
    return (
        <div className={"gpt3__article"}>
            <div className={"gpt3__article-image"}>
                <img src={imgUrl} alt={"article"}/>
            </div>
            <div className={"gpt3__article-content"}>
                <div>
                    <p>{fecha}</p>
                    <h3>{titulo}</h3>
                </div>
                <p>Leer más</p>
            </div>
        </div>
    )
}
export default Article
