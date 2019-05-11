import React from 'react';

import { validateInput, validateForm, clearInputCheck } from '../utils';

class SubmitComment extends React.Component {
    constructor() {
        super();
    }
    
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

        validateForm({
            form : e.target,
            formInvalidClass : 'form-invalid',
            formValidClass : 'form-valid',
            inputErrorClass : 'input-error'
        });
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

export default SubmitComment;