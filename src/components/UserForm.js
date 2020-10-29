import React, { Component } from 'react'

export default class UserForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      name:"",
      email:"",
      gen:""
    };
  }
  handleChange    =e =>{
    this.setState({
     [e.target.name] :  e.target.value 
    })
    console.log(this.state.name)
  };
  
  handleSubmit = e =>{
    e.preventDefault();
    const newUser={
      name:this.state.name,
      email: this.state.email,
      gen :this.state.gen
    };
    this.props.addUser(newUser)
    this.setState({
      name : "",
      email : "",
      gen : ""
    });
  };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="App__user-form">
                  <div className="form-control">
                    <label>Name</label>
                    <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                  </div>
                 <div>
                  <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                  </div>
                  <div>
                  <label>Gen</label>
                    <input
                    type="number"
                    name="gen"
                    value={this.state.gen}
                    onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <button type="submit">Add User</button>
                  </div>
        </form>
        )
    }
}
