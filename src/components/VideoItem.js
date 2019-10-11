import React from 'react';
import '../css/VideoItem.css';

const VideoItem = (props) => {
    console.log(props);
    const {title, description, thumbnails} = props.data;
    return (
        <div className="video-item">
            <div className="video-item-image">
                <img src={thumbnails.medium.url} />
            </div> 
            <div className="video-item-details">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>    
        </div>
    )
}

export default VideoItem;