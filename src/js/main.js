import React  from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';

class AddUser extends React.Component{
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

class User extends React.Component{
  render(){
    return (
      <li>
        {this.props.children} 
        <span className='delete' onClick={this.props.onDelete}>x</span>
      </li>
    )
  }
}

class UsersList extends React.Component{
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

class App extends React.Component{
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

ReactDOM.render(<App />, document.getElementById('app'));