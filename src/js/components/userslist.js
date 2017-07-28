import React, { Component } from 'react'
import User from './user.js'


class UsersList extends Component{
  render(){
  let onUserDelete = this.props.onUserDelete;
    return(
      <ul id='userList'>
        {
          this.props.users.map(function(user){
            return <User key={user.id} onDelete={onUserDelete.bind(null, user)}> {user.name} </User>
          })
        }
      </ul>
    )
  }
}

export default UsersList