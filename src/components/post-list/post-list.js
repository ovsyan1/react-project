import React from 'react';

import PostListItem from '../post-list-item';

const PostList = (props) => {
    let dataMapLabel = props.data.map(item => {
        const {id, ...itemProps} = item;
        if(typeof item === 'object' && isEmpty(item)){
           return <PostListItem {...itemProps} key={id}/> 
        }
         
    })

    function isEmpty(obj){
        for(let key in obj){
            return true
        }
        return false;
    }
    
    return (
        <ul className="app-list list-group">
            {dataMapLabel}
        </ul>
    )
}

export default PostList;