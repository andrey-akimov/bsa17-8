import React, { Component } from 'react'
import AddUser from './adduser.js'
import UsersList from './userslist.js'


class App extends Component{
  constructor(){
    super();
    this.state = {
      users: []
    }
    this.pushUser = this.pushUser.bind(this);
    this.handleUserDelete = this.handleUserDelete.bind(this);
  }

  pushUser(newUser){
    let arr = this.state.users.slice();
    arr.push(newUser);
    this.setState({ users: arr });
  }

  handleUserDelete(user){
    let userId = user.id;
    let newUsers = this.state.users.filter(function(user) {
      return user.id !== userId;
    });
    this.setState({ users: newUsers });
  }

  render(){
    return(
      <div>
        <AddUser onUserAdd={this.pushUser} />
        <UsersList users={this.state.users} onUserDelete={this.handleUserDelete} />
      </div>
    )
  }
}

export default App