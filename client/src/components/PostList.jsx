import React from 'react';
import axios from 'axios';
import queryString from 'query-string';

import { BASE_URL, PREVIEW_MAX_LENGTH } from '../constants';
import { formatDate, getQueryFromURL, trimText } from '../utils';

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
        const q = queryString.parse(this.props.location.search)
            .q;
        let query = queryString.stringify({
            q,
            page
        });
        query = query ? '?' + query : '';
    
        
        axios.get(`${BASE_URL}/api/${query}`)
            .then(res => {
                const posts = res.data.results.map(post => 
                    Object.assign({}, post, {
                        body : trimText(post.body, PREVIEW_MAX_LENGTH)
                    }));

                this.setState({
                    posts,
                    nextPage : res.data.next,
                    prevPage : res.data.previous
                });
            });
    }
    
    render() {
        const data = this.state.posts;
        
        let q = queryString.parse(this.props.location.search)
        .q;

        const List = (
            <ul className="PostList">
                    <h1 style={{
                        marginTop : '1rem',
                        textAlign : !q ? 'center' : 'left',
                        fontSize : !q ? '3rem' : '1.5rem'
                    }}>
                        {                
                            !q ?
                            'Chihiro Days' :
                            `Результаты поиска "${q}"`
                        }
                    </h1>
                    
                    {data.map((post, id) => (
                        <li key={`post_${id}`} className="rounded shadowed">
                            <a href={`/posts/${post.id}`}>
                                <h1>{post.title}</h1>
                            </a>
        
                            <h2>
                                <span>Автор: {post.author}</span>
                                <span>
                                    запощено: {formatDate(post.date, 'd.m.Y H:M')}
                                </span>
                            </h2>
        
                            <p>
                                {post.body}
                            </p>
                        </li>
                    ))}
                </ul>
        );

        let nextUrl = getQueryFromURL(this.state.nextPage);
        nextUrl = nextUrl ? '/' + nextUrl : null;
        let prevUrl = getQueryFromURL(this.state.prevPage);
        prevUrl = prevUrl ? '/' + prevUrl : null;


        return (
            <Layout content={List} 
            footer={<Paginator 
            nextUrl={nextUrl} 
            prevUrl={prevUrl} 
            />} />
        )
    }
}

export default PostList;