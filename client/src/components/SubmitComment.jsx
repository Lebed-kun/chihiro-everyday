import React from 'react';

function SubmitComment() {
    return (
        <form className="post-comment">
            <label htmlFor="name">
                Name:
                <input type="text" id="name"/>
            </label>

            <label htmlFor="email">
                E-mail:
                <input type="text" id="email"/>
            </label>

            <label htmlFor="text">
                Text:
                <textarea id="text">
                </textarea>
            </label>

            <button type="submit">
                Submit
            </button>
        </form>
    )
}

export default SubmitComment;