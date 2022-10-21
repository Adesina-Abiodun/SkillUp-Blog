import React from 'react'
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import './Login.css'
import v1 from './img/v1.svg'
import v2 from './img/v1.svg'


function Login() {

  const { regiser, handleSubmit } = useForm()



  return (
    <div className='loginpage'>
      <div className="txtcnt">
        <NavLink className="home" to="/">SkillUp Africa Blog</NavLink>
        <h2 className="title">The Ancient city of Rome and the history of the great city.</h2>
        <div id='autor'>
          <h3 id='olive'>Olive Junior</h3>
          <h4 id='lead'>Lead Writer, SkillUp Africa</h4>
        </div>
      </div>
      <div className='form'>
        <h1>Welcome Back!</h1>
        <p>Welcome back, please enter your details</p>
        <form className='fom' action="">
          <button>Sign in with Google</button>
          <br /><br />
          <p><img src={v1} />or<img src={v2} /></p>
          <input type="email" placeholder='Email Address' />
          <br />
          <input type="password" placeholder='Password' />
          <p id='pswrd'><NavLink>Forget Password</NavLink></p>
          <button id='login'>Login</button>
        </form>
        <p>Not registered yet? Create an Account</p>
      </div>
    </div>
  )

}

export default Login