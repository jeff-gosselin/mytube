import React, { Component } from 'react';
import Comment from './Comment';
import { Link } from 'react-router-dom';
import '../css/VideoItem.css';
import axios from 'axios';

const API = 'AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo';


class VideoItem extends Component {
    state = {
        comments: []
    }

    async componentDidMount() {
        let comments = await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?key=${API}&textFormat=plainText&part=snippet&videoId=${this.props.routeId}&maxResults=50`);
        this.setState({
            comments: comments.data.items
        })
    }

    render() {
        let vidComments;
        if (this.state.comments.length > 0) {
            vidComments = this.state.comments.map(comment => <Comment key={comment.id} data={comment.snippet} />);
        }
        return (
            <div className="video-page">
                <Link className="back" to="/">back to search</Link>
                <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${this.props.routeId}`} 
                frameborder="0" 
                allow="accelerometer; 
                autoplay; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture" 
                allowfullscreen>
                </iframe>

                <div className="comments-section">
                    {vidComments}
                </div>      
            </div>
        )
    }  
}

export default VideoItem;

// 