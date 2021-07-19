import React from "react";
import axios from "axios"
import { render } from "react-dom/cjs/react-dom.development";
import BubblePage from "./BubblePage"

class Login extends React.Component {
 
 
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };
  
  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.id]: e.target.value
      }
    });
  };
  
  
  login = e => {
    e.preventDefault();
    axios.post(`/login`, this.state.credentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
       render(<BubblePage />);
       this.props.history.push("/");
      });

     
  };
 

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
        <label>Username: </label>
          <input
    
            type="text"
            id="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label>Password: </label>
          <input
            type="password"
            id="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button id="submit">Log in</button>
          
        </form>
     
      </div>
    );
  }}
 
 
   

  
 export default Login;
 
 

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"