import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { BASE_URL } from '../constants';

import { formatDate } from '../utils';

const mapStateToProps = state => {
    return {
        commentPosted : state.commentPosted
    }
}

class CommentList extends React.Component {
    state = {
        comments : []
    }

    getComments = () => {
        const postId = this.props.postId;
        
        axios.get(`${BASE_URL}/api/${postId}/comments/`)
            .then(res => {
                this.setState({
                    comments : res.data
                })
            });
    }

    componentDidMount() {
        this.getComments();
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.commentPosted !== this.props.commentPosted) {
            this.getComments();
        }
    }
    
    render() {
        return (
            <ul className="comments">
                <h1>Comments</h1>
    
                {this.state.comments.map((comment, id) => (
                    <li key={`comment_${id}`}>
                        <h2>
                            { 
                                comment.email ? 
                                <a href={`mailto:${comment.email}`}>
                                    {comment.name || 'Anonymous'}
                                </a> :
                                comment.name || 'Anonymous'
                            }
                        </h2>
    
                        <p>
                            {comment.text}
                        </p>
    
                        <footer>
                            {formatDate(comment.date, 'd.m.Y H:S')}
                        </footer>
                    </li>
                ))}
            </ul>
        );
    }
}

export default connect(mapStateToProps)(CommentList);