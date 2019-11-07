import React, { Component } from 'react';
import '../css/SearchBar.css';
import SurfTube from '../img/surftube.png';
import Play from '../img/play.png';

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
        <form onSubmit={e => this.props.handleSubmit(e, this.state.query)}>
          <img className='surf-tube-logo' src={SurfTube} alt='' />
          <input
            onChange={this.handleInput}
            type='text'
            placeholder='Search Surf Videos'
          />
          <button></button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
