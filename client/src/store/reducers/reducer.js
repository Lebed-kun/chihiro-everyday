import * as actionTypes from '../actions/actionTypes';

const initialState = {
    commentPosted : false
}

const addCommentSuccess = (state, action) => {
    return Object.assign({}, state, {
        commentPosted : !state.commentPosted
    });
} 

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT_SUCCESS:
            return addCommentSuccess(state, action);
        default:
            return state;
    }
}

export default reducer;