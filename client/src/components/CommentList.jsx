import React from 'react';

import { formatDate } from '../utils';

function CommentList(props) {
    return (
        <ul className="comments">
            <h1>Comments</h1>

            {props.comments.map((comment, id) => (
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
                        {formatDate(comment.date, 'd.m.Y H:S')}
                    </footer>
                </li>
            ))}
        </ul>
    );
}

export default CommentList;