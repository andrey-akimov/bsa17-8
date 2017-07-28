import React, { Component } from 'react'


class AddUser extends Component{
  constructor(){
    super();
    this.state = {
      user: ''
    }
    this.pushUser = this.pushUser.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
  }

  pushUser(){
    if(this.state.user != ''){
      let newUser = {
        name: this.state.user,
        id: Date.now()
      };
      this.props.onUserAdd(newUser);
      this.setState({ user: '' });
    } else {
      return false;
    }
  }

  onTextChange(e) {
    this.setState({ user: e.target.value });
  }

  render(){
    return(
      <div id='input-form'>
        <input type='text' ref='input' value={this.state.user} onChange={this.onTextChange} />
        <button onClick={this.pushUser}>Send</button>
      </div>
    )
  }
}

export default AddUser