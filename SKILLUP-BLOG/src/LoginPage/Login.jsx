import React from 'react'
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import './Login.css'


function Login() {

  const {regiser, handleSubmit} = useForm()

 

  return (
    <div className='loginpage'>
      <div className="banner-text">
        <NavLink className="home" to="/">SkillUp Africa Blog</NavLink>
        <h2 className="title">The Ancient city of Rome and the history of the great city.</h2>
        <span id='autor'>
          <h3>Olive Junior</h3>
          <h4>Lead Writer, SkillUp Africa</h4>
        </span>
      </div>
      <div className='form'>
        <h1>Welcome Back!</h1>
        <p>Welcome back, please enter your details</p>
        <form action="">
        <button>Sign in with Google</button><br/><br/>
        <p></p>
        <input type="email" placeholder='Email Address'/>
        <p></p>
        <br/>
        <input type="password" placeholder='Password' />
        <p></p>
        <p>Forget Password</p>
        <button>Login</button>
        </form>
        <p>Not registered yet? Create an Account</p> 
      </div>
    </div>
  )

}

export default Login