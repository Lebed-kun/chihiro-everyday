import React from 'react';

import { formatDate } from '../utils';

import Layout from './Layout';

const data = {
    title : 'Hello World!',
    author : 'admin',
    date : new Date(),
    body : 'Suspendisse non faucibus nibh. Aliquam erat volutpat. Curabitur tristique tellus et auctor faucibus. Duis sollicitudin et velit viverra lacinia. Nulla facilisi. Etiam sit amet orci fermentum, commodo leo in, dictum ipsum. Pellentesque ullamcorper sit amet velit ac mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus et vehicula nulla, a maximus ligula. Integer quam odio, fringilla sed urna sed, consequat ullamcorper purus.',
    imgUrls : [
            'http://picsum.photos/320/200',
            'http://picsum.photos/320/200',
            'http://picsum.photos/320/200'
    ],
    views : 300,
    likes : 50,
    comments : [
        {
            name : 'John Byte',
            email : 'example@example.com',
            text : 'Nullam at libero pharetra, commodo diam non, venenatis ante. Phasellus metus risus, sagittis a pretium vel, facilisis semper lacus. Aenean.',
            date : new Date()
        },

        {
            name : 'John Byte',
            email : 'example@example.com',
            text : 'Nullam at libero pharetra, commodo diam non, venenatis ante. Phasellus metus risus, sagittis a pretium vel, facilisis semper lacus. Aenean.',
            date : new Date()
        },

        {
            name : 'John Byte',
            email : 'example@example.com',
            text : 'Nullam at libero pharetra, commodo diam non, venenatis ante. Phasellus metus risus, sagittis a pretium vel, facilisis semper lacus. Aenean.',
            date : new Date()
        }
    ]
}

const Post = (
    <div className="post">
        <h1>{data.title}</h1>

        <h2>
            <span>by {data.author}</span>
            <span>posted at {formatDate(data.date, 'd.m.Y H:M')}</span>
        </h2>

        <ul>
            {data.imgUrls.map(url => (
                <li>
                    <img src={url} />
                </li>
            ))}
        </ul>

        <p>
            {data.body}
        </p>

        <footer>
            <span>
                {data.views}
            </span>

            <span>
                {data.likes}
            </span>
        </footer>
    </div>
);

const Form = (
    <form className="post-comment">
        <label htmlFor="name">
            Name:
            <input type="text" id="name"/>
        </label>

        <label htmlFor="email">
            E-mail:
            <input type="text" id="email"/>
        </label>

        <label htmlFor="text">
            Text:
            <textarea id="text">
            </textarea>
        </label>

        <button type="submit">
            Submit
        </button>
    </form>
)

const Comments = (
    <ul className="comments">
        <h1>Comments</h1>

        {data.comments.map((comment, id) => (
            <li key={`comment_${id}`}>
                <h2>
                    { 
                        comment.email ? 
                        <a href={`mailto:${comment.email}`}>
                            {comment.name}
                        </a> :
                        comment.name
                    }
                </h2>

                <p>
                    {comment.text}
                </p>

                <footer>
                    {formatDate(comment.date, 'd.m.y H:S')}
                </footer>
            </li>
        ))}
    </ul>
)

function PostDetail() {
    return (
        <Layout content={
            (
                <div className="PostDetail">
                    {Post}
                    {Form}
                    {Comments}
                </div>
            )
        } />
    )
}

export default PostDetail;