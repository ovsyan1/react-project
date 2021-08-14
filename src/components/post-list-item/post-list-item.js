import React from 'react';



export default class PostListItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            important: false,
            like: false
        }
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }
    onImportant(){
        this.setState(({important}) => ({
            important: !important
        }))
    }
    onLike(){
        this.setState(({like}) => ({
            like: !like
        }))
    }
    render(){
            let classNameS = 'app-list-item d-flex justify-content-between';
            if(this.state.important){
                classNameS += ' important';
            }
            if(this.state.like){
                console.log('lol');
                classNameS += ' like';
            }
        return (
            <li className={classNameS}>
                <span className="app-list-item-label"
                onClick={this.onLike}>
                    {this.props.label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                        <button type="button" 
                                className="btn-star btn-sm">
                            <i className="fa fa-star"
                            onClick={this.onImportant}></i>
                        </button>
                        <button type="button"
                                className="btn-trash btn-sm">
                            <i className="fa fa-trash-o"></i>
                        </button>
                        <i className="fa fa-heart"></i>
                </div>
        </li>
        )
    }
}