import React from 'react'
import { Post, IArticle} from './Post';

export interface IPosts {
    posts: IArticle[]
}

export const Posts = ({posts} : IPosts) => {
    // console.log(posts);
    return (
        <div>
            {posts.map((article: any, index: number) => <Post
                article={article}
                key={index}
              />
            )}
        </div>
    )
}
