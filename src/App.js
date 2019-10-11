import React, { Component } from 'react';
import VideoItem from './components/VideoItem';
import './App.css';
import axios from 'axios';

const API = 'AIzaSyBJkFA-f5xF04VkFGQMA-wQcl5nsIWJ4Ro';
const URL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet&type=video&q=surf`;

class App extends Component {
  state = {
    ytData: []
  }
  async componentDidMount() {
    let yt = await axios.get(URL);
    
    this.setState({
      ytData: yt.data.items,
    })
  }

  render() {
    let ytVideos;

    if (this.state.ytData.length > 0) {
      ytVideos = this.state.ytData.map(vid => <VideoItem key={vid.id.videoId} data={vid.snippet} />);
    }

    return (
      <div className="App">
        {ytVideos}
      </div>
    );
  } 
}

export default App;
