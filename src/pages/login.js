import React from 'react'

export default function Login() {
  return (
    <>
      <form>
        <div className="form-group m-5">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group m-5">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary mx-5">Login</button>
      </form>
    </>
  )
}
