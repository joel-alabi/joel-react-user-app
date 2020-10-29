import React, { Component } from 'react';
import {connect} from "react-redux";
import{addUser,deleteUser,getAllUsers} from "./store/UserAction"
import './App.css';
import UserForm from './components/UserForm';
import UserInfo from './components/UserInfo';
import {logoutUser} from './store/authActions'

export  class App extends Component {
 
 addNewUser = newUser => {
    this.props.addUser(newUser)
  };

  deleteUser = user_id => {
    this.props.deleteUser(user_id)
  }

  componentDidMount(){
this.props.getAllUsers();
  }

  render() {
    return (
      <div className="App">
        
        <button onClick={this.props.logoutUser} className="user_logout">Logout</button>
        <UserForm addUser ={this.addNewUser}/> 
        <div className=".App__user-info">
          <h2>LIST OF USER</h2>
          {this.props.users.map((item,index) => {

          return(
            <UserInfo  
            key={index.id} 
            id={item.id}
            name={item.name} 
            email={item.email}
             gen={item.gen} 
             removeUser ={this.deleteUser}
             />
          );
          })}
        </div>
      </div>

    )
  }
} 

const mapStateToProps =(state)=>{
  console.log(state);
   return{
users: state.usersState.users,
};} 

const mapDispatchToProps = {
addUser: addUser,
deleteUser:deleteUser,
getAllUsers:getAllUsers, 
logoutUser:logoutUser,
}


export default connect(mapStateToProps,mapDispatchToProps)( App);
 