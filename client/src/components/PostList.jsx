import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import queryString from 'query-string';

import { BASE_URL } from '../constants';
import { formatDate, getQueryFromURL } from '../utils';

import Layout from './Layout';
import Paginator from './Paginator';

class PostList extends React.Component {
    state = {
        posts : [],
        nextPage : null,
        prevPage : null
    }
    
    componentDidMount() {
        const page = queryString.parse(this.props.location.search)
            .page;
        const query = page ? `?page=${page}` : '';
    
        
        axios.get(`${BASE_URL}/api/${query}`)
            .then(res => {
                this.setState({
                    posts : res.data.results,
                    nextPage : res.data.next,
                    prevPage : res.data.previous
                });
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

        let nextPage = queryString.parse(
            getQueryFromURL(this.state.nextPage)
        ).page;
        let prevPage = queryString.parse(
            getQueryFromURL(this.state.prevPage)
        ).page || (
            this.props.location.search ? 
            queryString
                .parse(this.props.location.search)
                .page - 1
            : null
        );

        return (
            <Layout content={List} 
            footer={<Paginator 
                nextPage={nextPage} 
                prevPage={prevPage}
                baseUrl="/?page="
            />} />
        )
    }
}

export default PostList;