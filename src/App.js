import React, { Component } from 'react';
import VideoList from './components/VideoList';
import { Route, Switch } from 'react-router-dom';
import VideoItem from './components/VideoItem';
import axios from 'axios';

const API = 'AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo';
const URL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet&type=video&q=surf`;

class App extends Component {
  state = {
    ytData: [],
    query: '',
    nextPage: ''
  }

  async componentDidMount() {
      let yt = await axios.get(URL);
      this.setState({
          ytData: yt.data.items,
          nextPage: yt.data.nextPageToken
      })
  }

  async moreVideos() {
    console.log("Q:", this.state.query);
    let yt;
    if (this.state.query === '') {
      yt = await axios.get(`${URL}&pageToken=${this.state.nextPage}`);
    } else {
      yt = await axios.get(`${URL}+${this.state.query}&pageToken=${this.state.nextPage}`);
    }
      
      this.setState({
          ytData: [...this.state.ytData, ...yt.data.items],
          nextPage: yt.data.nextPageToken
      })
  }

  async handleSubmit(e, query) {
      e.preventDefault();
      console.log(query);
      let yt = await axios.get(`${URL}+${query}`);
      this.setState({
          ytData: yt.data.items,
          query: query,
          nextPage: yt.data.nextPageToken
      })
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <VideoList handleSubmit={this.handleSubmit.bind(this)} moreVideos={this.moreVideos.bind(this)} ytData={this.state.ytData} nextPage={this.state.nextPage} />} />
        <Route path='/vid/:id' render={(routerProps) => {
          let id = routerProps.match.params.id;
          return (<VideoItem routeId={id} />)
        }} />
      </Switch>
    );
  } 
}

export default App;