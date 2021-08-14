import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import '../app-header/app-header.css';
import '../post-add-form/post-add-form.css';
import '../post-list/post-list.css';
import '../post-list-item/post-list-item.css';
import '../search-panel/search-panel.css';

const App = () => {

    const data = [
        1,
        {label: "Going to learn React", important: true, id: 'asdf'},
        {label: "That is so good", important: false, id: 'rrr'},
        {label: "I need a break ...", important: false, id: 'werwer'},
    ];

    return (
    <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
            <SearchPanel/>
            <PostStatusFilter/>
            </div>
            <PostList data={data}/>
            <PostAddForm/>
    </div>
    )
}

export default App;