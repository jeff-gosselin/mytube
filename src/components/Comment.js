import React from 'react';
import '../css/Comment.css';

const Comment = (props) => {
    const { authorDisplayName, textDisplay } = props.data.topLevelComment.snippet;
    return (
        <div className="comment">
            <h4>{authorDisplayName}</h4>
            <p>{textDisplay}</p>
        </div> 
    )
}

export default Comment;