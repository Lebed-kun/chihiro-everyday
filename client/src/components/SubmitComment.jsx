import React from 'react';
import { connect } from 'react-redux';

import { COMMENT_MAX_LENGTH } from '../constants';
import { validateInput, validateForm, clearInputCheck } from '../utils';

import * as actions from '../store/actions/actions';

import '../css/SubmitComment.css';

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

        let isPostingFree = new Date(localStorage.getItem('freeDate')) <= new Date();

        if (isFormValid && isPostingFree) {
            this.props.onSubmit({
                postId : this.props.postId,
                name : this.state.name,
                email : this.state.email,
                text : this.state.text
            })
        } else if (!isPostingFree) {
            alert('Защита от рекламной дрисни. Подожди 7 секунд до постинга коммента');
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
            <form className="post-comment container" onSubmit={this.handleSubmit}>
                <div className="row">
                    <h1 className="col-12"
                    style={{
                        fontSize : '1.5rem',
                        textAlign : 'center',
                        margin : '1.5rem 0'
                    }}>
                        Оставь комментарий
                    </h1>
                </div>

                <div className="row">
                    <label htmlFor="name" className="col-lg-6">
                        <p>Имя:</p>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </label>

                    <label htmlFor="email" className="col-lg-6">
                        <p>E-mail:</p>
                        <input type="text" id="email" onChange={this.handleChange} 
                        datavalidator="email"
                        onBlur={this.handleBlur} 
                        onFocus={this.handleFocus} 
                        />
                    </label>
                </div>
    
                <div className="row">
                    <label htmlFor="text" className="col-md-12">
                        <p>Комментарий:</p>
                        <textarea id="text" onChange={this.handleChange}
                        datarequired="true"
                        datamaxlength="1500"
                        onBlur={this.handleBlur} 
                        onFocus={this.handleFocus}>
                        </textarea>
                        <p className="counter" style={{
                            color : this.state.text.length <= COMMENT_MAX_LENGTH ?
                                '#333' : 'rgb(255, 57, 57)',
                            float : 'right'
                        }}>
                            {this.state.text.length} / {COMMENT_MAX_LENGTH}
                        </p>
                    </label>
                </div>
    
                <div className="row">
                    <button type="submit" className="mx-auto">
                        Отправить
                    </button>
                </div>
            </form>
        )
    }
}

export default connect(null, mapDispatchToProps)(SubmitComment);