import React, { Component } from 'react';
import '../css/SearchBar.css';
import SurfTube from '../img/surftube.png';

class SearchBar extends Component {
  state = {
    query: ''
  };

  handleInput = e => {
    this.setState({
      query: e.target.value
    });
  };

  render() {
    return (
      <div className='title-bar'>
        <img className='surf-tube-logo' src={SurfTube} alt='' />
        <form onSubmit={e => this.props.handleSubmit(e, this.state.query)}>
          <input onChange={this.handleInput} type='text' />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
