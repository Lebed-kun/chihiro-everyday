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
        comments : [],
        nextPage : null
    }

    getComments = (next=false) => {
        const postId = this.props.postId;
        const url = !next ?
            `${BASE_URL}/api/${postId}/comments/` :
            this.state.nextPage;
        
        axios.get(url)
            .then(res => {
                const comments = !next ? res.data.results :
                    this.state.comments.concat(
                        res.data.results
                    );
                
                this.setState({
                    comments,
                    nextPage : res.data.next
                })
            });
    }

    handleClick = e => {
        this.getComments(true);
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
            <ul className="comments container"
            style={{marginTop : '3rem'}}>
                <div className="row">
                    <h1 className="col-md-12" 
                    style={{fontSize : '2rem'}}>
                    Comments
                    </h1>
                </div>
    
                {this.state.comments.map((comment, id) => (
                    <li key={`comment_${id}`} className="container rounded">
                        <div className="row">
                            <h2 className="col-md-12">
                                { 
                                    comment.email ? 
                                    <a href={`mailto:${comment.email}`}>
                                        {comment.name || 'Anonymous'}
                                    </a> :
                                    comment.name || 'Anonymous'
                                }
                            </h2>
                        </div>
    
                        <div className="row">
                            <p className="col-md-12">
                                {comment.text}
                            </p>
                        </div>
                        
                        <div className="row">
                            <footer className="col-md-12">
                                {formatDate(comment.date, 'd.m.Y H:M')}
                            </footer>
                        </div>
                    </li>
                ))}

                {
                    this.state.nextPage ? 
                        <div className="row">
                            <button id="show_more" onClick={this.handleClick}
                            className="mx-auto">
                                Show More
                            </button>
                        </div>
                    : null
                }
            </ul>
        );
    }
}

export default connect(mapStateToProps)(CommentList);