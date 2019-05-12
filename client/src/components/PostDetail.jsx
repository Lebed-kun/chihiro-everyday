import React from 'react';
import axios from 'axios';

import { BASE_URL } from '../constants';
import { formatDate } from '../utils';

import Layout from './Layout';
import CommentList from './CommentList';
import Form from './SubmitComment';

class PostDetail extends React.Component {
    state = {
        post : {},
        images : []
    }
    
    componentDidMount() {
        const postId = this.props.match.params.postId;
        
        axios.get(`${BASE_URL}/api/${postId}/`)
            .then(res => {
                this.setState({
                    post : res.data
                })
            });

        axios.get(`${BASE_URL}/api/${postId}/images/`)
            .then(res => {
                this.setState({
                    images : res.data
                });
            });
    }
    
    render() {
        const post = this.state.post;
        const images = this.state.images;

        const postId = this.props.match.params.postId;
        
        const Post = Object.keys(post).length ? (
            <div className="post">
                <h1>{post.title}</h1>
        
                <ul>
                    {images.map((imageData, id) => (
                        <li key={`post_img_${id}`}>
                            <img src={imageData.image_url} />
                        </li>
                    ))}
                </ul>
        
                <p>
                    {post.body}
                </p>
        
                <footer>
                    <span>by {post.author}</span>
                    <span>posted at {formatDate(post.date, 'd.m.Y H:M')}</span>
                </footer>
            </div>
        ) : null;
        
        return (
            <Layout content={
                (
                    <div className="PostDetail">
                        {Post}
                        {<Form postId={postId} />}
                        {<CommentList postId={postId} />}
                    </div>
                )
            } />
        )
    }
}

export default PostDetail;