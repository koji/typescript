import React from 'react'
import marked from 'marked';

export interface IArticle {
    article: {
        fields: {
            title: string;
            description: string;
            image: IImage
        }
    }
};

interface IImage {
    fields: {
        file: {
            url: string;
        }
    }
};

export const Post = ({ article }: IArticle) => {
    // console.log(article);
    const { title, image, description} =article.fields;
    const postDescription = marked(description);
    return (
        <div className="post">
            <h2 className="title">{title}</h2>
            {image && <img className="featuredImage" src={image.fields.file.url} alt={title} title={title} /> }
            <section dangerouslySetInnerHTML={{ __html: postDescription}} />
        </div>
    )
}
