import React from 'react';
import { Link } from 'react-router-dom';

import { formatDate } from '../utils';

import Layout from './Layout';

const data = [
    {
        title : 'Hello World!',
        author : 'admin',
        date : new Date(),
        body : 'Suspendisse non faucibus nibh. Aliquam erat volutpat. Curabitur tristique tellus et auctor faucibus. Duis sollicitudin et velit viverra lacinia. Nulla facilisi. Etiam sit amet orci fermentum, commodo leo in, dictum ipsum. Pellentesque ullamcorper sit amet velit ac mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus et vehicula nulla, a maximus ligula. Integer quam odio, fringilla sed urna sed, consequat ullamcorper purus.',
        imgUrls : [
            'http://picsum.photos/320/200',
            'http://picsum.photos/320/200',
            'http://picsum.photos/320/200'
        ],
        comments : 3
    },

    {
        title : 'Hello World!',
        author : 'admin',
        date : new Date(),
        body : 'Suspendisse non faucibus nibh. Aliquam erat volutpat. Curabitur tristique tellus et auctor faucibus. Duis sollicitudin et velit viverra lacinia. Nulla facilisi. Etiam sit amet orci fermentum, commodo leo in, dictum ipsum. Pellentesque ullamcorper sit amet velit ac mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus et vehicula nulla, a maximus ligula. Integer quam odio, fringilla sed urna sed, consequat ullamcorper purus.',
        imgUrls : [
            'http://picsum.photos/320/200',
            'http://picsum.photos/320/200',
            'http://picsum.photos/320/200'
        ],
        comments : 3
    },

    {
        title : 'Hello World!',
        author : 'admin',
        date : new Date(),
        body : 'Suspendisse non faucibus nibh. Aliquam erat volutpat. Curabitur tristique tellus et auctor faucibus. Duis sollicitudin et velit viverra lacinia. Nulla facilisi. Etiam sit amet orci fermentum, commodo leo in, dictum ipsum. Pellentesque ullamcorper sit amet velit ac mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus et vehicula nulla, a maximus ligula. Integer quam odio, fringilla sed urna sed, consequat ullamcorper purus.',
        imgUrls : [
            'http://picsum.photos/320/200',
            'http://picsum.photos/320/200',
            'http://picsum.photos/320/200'
        ],
        comments : 3
    }
];

const List = (
    <ul className="PostList">
            {data.map((post, id) => (
                <li key={`post_${id}`}>
                    <Link to={`/posts/${id}`}>
                        <h1>{post.title}</h1>
                    </Link>

                    <h2>
                        <span>by {post.author}</span>
                        <span>
                            posted at {formatDate(post.date, 'd.m.Y H:M')}
                        </span>
                    </h2>

                    <ul>
                       {post.imgUrls.map((url, id) => (
                           <li key={`post_img_${id}`}>
                               <img src={url} />
                           </li>
                       ))} 
                    </ul>

                    <p>
                        {post.body}
                    </p>

                    <footer>
                        <span>
                            {post.comments}
                        </span>
                    </footer>
                </li>
            ))}
        </ul>
);

function PostList() {
    return (
        <Layout content={List} />
    )
}

export default PostList;