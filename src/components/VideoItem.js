import React from 'react';

const VideoItem = (props) => {
    return (
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/bMb4vRxDQpY" 
        frameborder="0" 
        allow="accelerometer; 
        autoplay; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture" 
        allowfullscreen>

        </iframe>
    )
}

export default VideoItem;