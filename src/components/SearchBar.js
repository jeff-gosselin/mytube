import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        query: '' 
    }

    handleInput = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={(e) => this.props.handleSubmit(e, this.state.query)}>
                <input onChange={this.handleInput} type="text" />
                <button>Search</button>
            </form>
        )
    }
}

export default SearchBar;
