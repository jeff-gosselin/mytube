import React, { Component } from 'react';
import VideoList from './components/VideoList';
import { Route, Switch } from 'react-router-dom';
import VideoItem from './components/VideoItem';


class App extends Component {
  state = {
    routeId: ''
  }
  
  vidRouteId = (e, id) => {
    this.setState({
      routeId: id
    })
  }

  render() {

    return (
      <Switch>
        <Route exact path="/" render={() => <VideoList vidRouteId={this.vidRouteId} />} />
        <Route exact path={`/vid/${this.state.routeId}`} render={() => <VideoItem routeId={this.state.routeId} />} />
        
      </Switch>
    );
  } 
}

export default App;
