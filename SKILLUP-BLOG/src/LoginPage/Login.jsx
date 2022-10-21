import React from 'react'
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
// import{ FcGoogle } from "react-icons/fa"
import './Login.css'
import v1 from './img/v1.svg'
import v2 from './img/v1.svg'


function Login() {

  // const { regiser, handleSubmit } = useForm()



  return (
    <div className='loginpage'>
      <div className="txtcnt">
        <div className='space'></div>
        <NavLink className="home" to="/">SkillUp Africa Blog</NavLink>
        <h2 className="title">The Ancient city of Rome and the history of the great city.</h2>
        <div id='autor'>
          <h3 id='olive'>Olive Junior</h3>
          <h4 id='lead'>Lead Writer, SkillUp Africa</h4>
        </div>
      </div>
      <div className='form'>
        <div className='welcont'>
          <h1 id='welcm'>Welcome Back!</h1>
          <p id='details'>Welcome back, please enter your details</p>
        </div>
        <form className='fom' action="">
          <NavLink id='google'> Sign in with Google</NavLink>
          <br /><br />
          <p><img src={v1} />or<img src={v2} /></p>
          <br /><br />
          <input type="email" placeholder='Email Address' />
          <br />
          <input type="password" placeholder='Password' />
          <p id='pswrd'><NavLink>Forget Password?</NavLink></p>
          <button id='login'>Login</button>
        </form>
        <p id='signup'>Not registered yet? <NavLink>Create an Account</NavLink></p>
      </div>
    </div>
  )

}

export default Login