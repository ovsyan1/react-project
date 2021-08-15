import React from 'react';
import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';

const PostList = (props) => {
    let dataMapLabel = props.data.map(item => {
        const {id, ...itemProps} = item;
        if(typeof item === 'object' && isEmpty(item)){
           return <PostListItem {...itemProps} key={id} 
                onDelete={() => props.onDelete(id)}
                onToggleImportant={() => props.onToggleImportant(id)}
                onToggleLiked={() => props.onToggleLiked(id)}/> 
        }
         
    })

    function isEmpty(obj){
        for(let key in obj){
            return true
        }
        return false;
    }
    
    return (
        <ListGroup className="app-list">
            {dataMapLabel}
        </ListGroup>
    )
}

export default PostList;