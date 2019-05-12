import axios from 'axios';
import { BASE_URL } from '../../constants';
import * as actionTypes from './actionTypes';

export const addCommentSuccess = () => {
    return {
        type : actionTypes.ADD_COMMENT_SUCCESS
    }
}

export const addComment = data => {
    return dispatch => {
        const { postId, name, email, text } = data;
        
        axios.post(`${BASE_URL}/api/${postId}/add_comment/`, {
            name : name || '',
            email : email || '',
            text
        })
            .then(res => {
                console.log(res);
                dispatch(addCommentSuccess());
            })
            .catch(err => console.log(err));
    }
}