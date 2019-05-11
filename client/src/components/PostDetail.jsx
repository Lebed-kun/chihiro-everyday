import React from 'react';

import { formatDate } from '../utils';

import Layout from './Layout';
import CommentList from './CommentList';
import Form from './SubmitComment';

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

        <ul>
            {data.imgUrls.map((url, id) => (
                <li key={`post_img_${id}`}>
                    <img src={url} />
                </li>
            ))}
        </ul>

        <p>
            {data.body}
        </p>

        <footer>
            <span>by {data.author}</span>
            <span>posted at {formatDate(data.date, 'd.m.Y H:M')}</span>
        </footer>
    </div>
);

function PostDetail() {
    return (
        <Layout content={
            (
                <div className="PostDetail">
                    {Post}
                    {<Form />}
                    {<CommentList comments={data.comments} />}
                </div>
            )
        } />
    )
}

export default PostDetail;