import React, { Component } from 'react';
import VideoList from './components/VideoList';
import { Route, Switch } from 'react-router-dom';
import VideoItem from './components/VideoItem';


class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <VideoList />} />
        <Route path='/vid/:id' render={(routerProps) => {
          let id = routerProps.match.params.id;
          return (<VideoItem routeId={id} />)
        }} />
      </Switch>
    );
  } 
}

export default App;