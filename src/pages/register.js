import React, { useState } from 'react'


export default function Register() {
  const [register, setRegister] = useState({
    name:'',
    email:'',
    username:'',
    password:'',
    confirmPassword:''
  });
  const [registerErr, setRegisterErr] = useState({
    name:null,
    email:null,
    username:null,
    password:null,
    confirmPassword:null
  });
  const handleFormChange = (event) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const preg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const ureg = /\s/g;


    if (event.target.name === "name") {
      setRegister({
        ...register,
        name: event.target.value,
      });

      setRegisterErr({
        ...registerErr,
        name:
          event.target.value.length === 0
            ? "This field is required"
            : null,
      });
    }

    if (event.target.name === "email") {
      setRegister({
        ...register,
        email: event.target.value,
      });
      
      setRegisterErr({
        ...registerErr,
        email:
          event.target.value.length === 0
            ? "This field is required"
            : reg.test(event.target.value) !== true
            ? "Not valid email"
            : null,
      });
    }

    if (event.target.name === "username") {
      setRegister({
        ...register,
        username: event.target.value,
      });

      setRegisterErr({
        ...registerErr,
        username:
          event.target.value.length === 0
            ? "This field is required"
            : ureg.test(event.target.value) === true
            ? "Space not allowed"
            : null,
      });
    }

    if (event.target.name === "password") {
      setRegister({
        ...register,
        password: event.target.value,
      });
      setRegisterErr({
        ...registerErr,
        password:
          event.target.value.length === 0
            ? "This field is required"
            : event.target.value === 0
            ? "Value must be greater than 0"
            : event.target.value.length < 8
            ? "password too short"
            :preg.test(event.target.value) !== true
            ? "password not valid"
            :null,
      });
    }
    if (event.target.name === "confirmPassword") {
      setRegister({
        ...register,
        confirmPassword: event.target.value,
      });

      setRegisterErr({
        ...registerErr,
        confirmPassword:
          event.target.value.length === 0
            ? "This field is required"
            : event.target.value !== register.password
            ? "not match"
            : null,
      });
    }
  };
  
  return (
    <>
      <h1>Register</h1><hr/>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" name="name" placeholder="your name" 
          value={register.name}
          onChange={handleFormChange}/>
          {registerErr.name && (
            <div id="priceHelp" className="form-text text-danger">
              {registerErr.name}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="your email" 
          value={register.email}
          onChange={handleFormChange}/>
          {registerErr.email && (
            <div id="priceHelp" className="form-text text-danger">
              {registerErr.email}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="username">User name</label>
          <input type="text" className="form-control" name="username" placeholder="your user name"
          value={register.username}
          onChange={handleFormChange}/>
          {registerErr.username && (
            <div id="priceHelp" className="form-text text-danger">
              {registerErr.username}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" placeholder="Password"
          value={register.password} 
          onChange={handleFormChange}/>
          {registerErr.password && (
            <div id="priceHelp" className="form-text text-danger">
              {registerErr.password}
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm password"
          value={register.confirmPassword}  
          onChange={handleFormChange}/>
          {registerErr.confirmPassword && (
            <div id="priceHelp" className="form-text text-danger">
              {registerErr.confirmPassword}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary m-5">Register</button>
      </form>
    </>
  )
}
