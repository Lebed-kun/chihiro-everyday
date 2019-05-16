import React from 'react';
import queryString from 'query-string';

class SearchBar extends React.Component {
    state = {
        query : ''
    }
    
    handleSubmit = e => {
        e.preventDefault();

        if (this.state.query) {
            window.location.href = this.props.baseUrl + this.state.query;
        }
    }

    handleChange = e => {
        this.setState({[e.target.id] : e.target.value});
    }
    
    render() {
        return (
            <form className="SearchBar" onSubmit={this.handleSubmit}>
                <input type="text" id="query" onChange={this.handleChange} />
                <button type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        )
    }
}

export default SearchBar;