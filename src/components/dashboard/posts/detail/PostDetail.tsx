import * as React from 'react';
import './PostDetail.css';
import { parseToHtml } from '../../../../services';

type PostDetailProps = Readonly<{
    title: string
    content?: string
}>;

export const PostDetail = (props: PostDetailProps) => {
    return (
        <article className="post-article">
            {/* <img src=" http://placehold.it/350x150 " className="post-article-image "> */}
            <h2 className="post-article-title">{props.title}</h2>
            <p
                className="post-article-content markdown-body"
                dangerouslySetInnerHTML={{ __html: parseToHtml(props.content || '') }}
            />
        </article>
    );
};
