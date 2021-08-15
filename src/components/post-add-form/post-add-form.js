import React from 'react';

class PostAddForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this)
    }

    onValueChange(e){
        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()
        this.props.onAdd(this.state.text)
        this.setState({
            text: ''
        })
    }
    render(){
       return (
        <form 
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}>
            <input
                type="text"
                value={this.state.text}
                placeholder="О чем вы думаете сейчас"
                className="form-control new-post-label"
                onChange={this.onValueChange}    
            />
            <button
                    type="submit"
                    className="btn btn-outline-secondary">
                    {/*  onClick={() => this.props.onAdd('hello')} */}
                    Добавить</button>
        </form>
    ) 
    }
}

export default PostAddForm;