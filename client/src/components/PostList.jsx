import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { BASE_URL } from '../constants';
import { formatDate } from '../utils';

import Layout from './Layout';

class PostList extends React.Component {
    state = {
        posts : []
    }
    
    componentDidMount() {
        axios.get(`${BASE_URL}/api/`)
            .then(res => {
                this.setState({
                    posts : res.data
                })
            });
    }
    
    render() {
        const data = this.state.posts;
        
        const List = (
            <ul className="PostList">
                    {data.map((post, id) => (
                        <li key={`post_${id}`}>
                            <Link to={`/posts/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
        
                            <h2>
                                <span>by {post.author}</span>
                                <span>
                                    posted at {formatDate(post.date, 'd.m.Y H:M')}
                                </span>
                            </h2>
        
                            <p>
                                {post.body}
                            </p>
                        </li>
                    ))}
                </ul>
        );
        
        return (
            <Layout content={List} />
        )
    }
}

export default PostList;