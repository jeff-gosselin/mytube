import React from 'react';
import '../css/VideoListItem.css';

const VideoListItem = (props) => {
    console.log(props);
    const {videoId, title, description, thumbnails} = props.data;
    return (
        <div className="video-list-item">
            <div className="video-list-item-image">
                <img src={thumbnails.medium.url} alt="" />
            </div> 
            <div className="video-list-item-details">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>    
        </div>
    )
}

export default VideoListItem;