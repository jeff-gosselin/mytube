import React from 'react';
import { Link } from 'react-router-dom';
import '../css/VideoListItem.css';

const VideoListItem = props => {
  const { title, description, thumbnails } = props.data;

  return (
    <div className='video-list-item'>
      <div className='video-list-item-image'>
        <Link to={`/vid/${props.videoId}`}>
          <img src={thumbnails.medium.url} alt='' />
        </Link>
      </div>
      <div className='video-list-item-details'>
        <Link className='video-title' to={`/vid/${props.videoId}`}>
          <h1>{title}</h1>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoListItem;
