import React, { Component } from 'react';
import VideoListItem from './VideoListItem';
import SearchBar from './SearchBar';
import '../css/VideoList.css';



class VideoList extends Component {

    // componentDidMount = () => {
    //     const catalyst = document.querySelector('.more');
    //     console.log(catalyst);
    //     const observer = new IntersectionObserver(this.props.moreVideos);
    //     observer.observe(catalyst);  
    // }

    render() {
        let ytVideos;
        if (this.props.ytData.length > 0) {
            ytVideos = this.props.ytData.map(vid => {
                return (
                    <VideoListItem 
                    key={vid.id.videoId} 
                    data={vid.snippet} 
                    videoId={vid.id.videoId} 
                    />
                )
            });
        }

        return (
            <div>
                <SearchBar handleSubmit={this.props.handleSubmit} />
                <div className="video-list">
                    {ytVideos}
                    <div className="more">
                        <button onClick={this.props.moreVideos}>Load More Videos</button>
                    </div>  
                </div>
            </div>
            
        )
    }
}

export default VideoList;