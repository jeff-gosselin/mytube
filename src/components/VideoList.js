import React, { Component } from 'react';
import VideoListItem from './VideoListItem';
import SearchBar from './SearchBar';
import '../css/VideoList.css';
import axios from 'axios';

const API = 'AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo';
const URL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet&type=video&q=surf`;

class VideoList extends Component {
    state = {
        ytData: [],
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
        let yt = await axios.get(`${URL}&pageToken=${this.state.nextPage}`);
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
            nextPage: yt.data.nextPageToken
        })
    }

    render() {
        let ytVideos;
  
        if (this.state.ytData.length > 0) {
        ytVideos = this.state.ytData.map(vid => {
            return (
                <VideoListItem 
                key={vid.id.videoId} 
                data={vid.snippet} 
                videoId={vid.id.videoId} 
                vidRouteId={this.props.vidRouteId} />
            )
        });
        }

        return (
            <div>
                <SearchBar handleSubmit={this.handleSubmit.bind(this)} />
                <div className="video-list">
                    {ytVideos}
                    <div className="more">
                        <button onClick={this.moreVideos.bind(this)}>Load More Videos</button>
                    </div>  
                </div>
            </div>
            
        )
    }
}

export default VideoList;