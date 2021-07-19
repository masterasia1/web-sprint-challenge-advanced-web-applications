import React, { useEffect, useState } from "react";
import axios from "axios"
import { render } from "react-dom/cjs/react-dom.development";
import BubblePage from "./BubblePage"

const Login = () => {
 
 
 const [form, setForm] = useState ({ username: "", password: ""})
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  
  useEffect(() => {})
  
  const error = "";
 // login = e => {
  //  e.preventDefault();
  //  axios.post(`/login`, this.state.credentials)
   //   .then(res => {
    //    localStorage.setItem("token", res.data.payload);
     //  render(<BubblePage />);
     //  this.props.history.push("/");
    //  });

     
 // };
 

  
    return (
      <div>
        <form onSubmit={form.login}>
        <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <button id="submit">Log in</button>
          
        </form>
        <p id="error" className="error">{error}</p>
      </div>
    );
  }
 
 
   

  
 export default Login;
 
 

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"