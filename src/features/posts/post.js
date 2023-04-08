import React from "react";
import ReactHtmlParser from 'react-html-parser';

export function Post ({post}) {
    const data = post.data;
    const title = data.title;
    const content = data.selftext_html;
   

    return (
        <div className='post'>
            <h1>{title}</h1>
            <div className='content' dangerouslySetInnerHTML={{__html: ReactHtmlParser(content)}} />
        </div>
    )
}