import React from 'react'
import { useForm } from "react-hook-form"


function Login() {

  const {regiser, handleSubmit} = useForm()

 

  return (
    <div className='loginpage'>
      <NavLink to="/">SkillUp Africa Blog</NavLink>
      <div className="banner-text">
        <h2>The Ancient city of Rome and the history of the great city.</h2>
        <span>
          <h3>Olive Junior</h3>
          <h4>Lead Writer, SkillUp Africa</h4>
        </span>
      </div>
      <div className='form'>
          <h1>Welcome Back!</h1>
          <p>Welcome back, please enter your details</p>
          <form action="">
          <button>Sign in with Google</button>
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password' />
          <p>Forget Password</p>
          <button>Login</button>
          </form>
          <p>Not registered yet? Create an Account</p> 
      </div>
    </div>
  )

}

export default Login