import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { BASE_URL } from '../constants';
import { validateInput, validateForm, clearInputCheck } from '../utils';

import * as actions from '../store/actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        onSubmit : data => dispatch(actions.addComment(data))
    }
}

class SubmitComment extends React.Component {
    state = {
        name : '',
        email : '',
        text : ''
    }

    handleChange = e => {
        this.setState({ [e.target.id] : e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        let isFormValid = validateForm({
            form : e.target,
            formInvalidClass : 'form-invalid',
            formValidClass : 'form-valid',
            inputErrorClass : 'input-error'
        });

        if (isFormValid) {

            /* axios.post(`${BASE_URL}/api/${postId}/add_comment/`, {
                name : this.state.name,
                email : this.state.email,
                text : this.state.text
            })
                .then(res => console.log(res))
                .catch(err => console.log(err)); */

            this.props.onSubmit({
                postId : this.props.postId,
                name : this.state.name,
                email : this.state.email,
                text : this.state.text
            })
        }
    }

    handleBlur = e => {
        validateInput(e.target, 'input-error');
    }

    handleFocus = e => {
        clearInputCheck(e.target, 'input-error');
    }
    
    render() {
        return (
            <form className="post-comment" onSubmit={this.handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input type="text" id="name" onChange={this.handleChange} />
                </label>
    
                <label htmlFor="email">
                    E-mail:
                    <input type="text" id="email" onChange={this.handleChange} 
                    datavalidator="email"
                    onBlur={this.handleBlur} 
                    onFocus={this.handleFocus} 
                    />
                </label>
    
                <label htmlFor="text">
                    Text:
                    <textarea id="text" onChange={this.handleChange}
                    datarequired="true"
                    onBlur={this.handleBlur} 
                    onFocus={this.handleFocus}>
                    </textarea>
                </label>
    
                <button type="submit">
                    Submit
                </button>
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(SubmitComment);