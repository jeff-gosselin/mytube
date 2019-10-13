import React from 'react';
import { Link } from 'react-router-dom';
import '../css/VideoItem.css';

const VideoItem = (props) => {
    var currentLocation = props.location;
    console.log(currentLocation);

    return (
        <div className="video-page">
            <Link className="back" to="/">back to search</Link>
            <iframe 
            width="560" 
            height="315" 
            src={`https://www.youtube.com/embed/${props.routeId}`} 
            frameborder="0" 
            allow="accelerometer; 
            autoplay; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture" 
            allowfullscreen>
            </iframe>
        </div>
    )
}

export default VideoItem;