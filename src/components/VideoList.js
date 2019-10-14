import React, { Component } from 'react';
import VideoListItem from './VideoListItem';
import SearchBar from './SearchBar';
import '../css/VideoList.css';



const VideoList = (props) => {

    let ytVideos;
    if (props.ytData.length > 0) {
        ytVideos = props.ytData.map(vid => {
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
            <SearchBar handleSubmit={props.handleSubmit} />
            <div className="video-list">
                {ytVideos}
                <div className="more">
                    <button onClick={props.moreVideos}>Load More Videos</button>
                </div>  
            </div>
        </div> 
    )
    
}

export default VideoList;