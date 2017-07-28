import React, { Component } from 'react'


class User extends Component{
  render(){
    return (
      <li>
        {this.props.children} 
        <span className='delete' onClick={this.props.onDelete}>x</span>
      </li>
    )
  }
}

export default User