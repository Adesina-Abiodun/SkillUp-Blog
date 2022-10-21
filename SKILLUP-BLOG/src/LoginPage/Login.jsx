import React from 'react'
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import './Login.css'
import axios from 'axios'
import google from './img/google.svg'
import v1 from './img/v1.svg'
import v2 from './img/v1.svg'


function Login() {

  const { register, handleSubmit } = useForm();

  const submitDetails = (data) => {
    axios.post("https://dashboard.heroku.com/apps/miniblogskillup/api/users/login", data)
    .then((result) => {
      console.log(result.data)
      alert(result.data.message);
      alert("Login Successfull!")
    })
    .catch((e) => {
      if(e.response.status == 400){
        setErrors("Account not found");
        alert(setErrors)
      }
      alert(e.response)
    });
  };



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
        <form className='fom' action="" onSubmit={handleSubmit(submitDetails)}>
          <NavLink id='google' ><img src={google}/><p>Sign in with Google</p></NavLink>
          <br /><br />
          <p id='or'><img src={v1} /> or <img src={v2}/></p>
          <br /><br />
          <input type="email" placeholder='Email Address' {...register("email", {required:true})} key={{}}/>
          <br />
          <input type="password" placeholder='Password' {...register("password", {required:true})} />
          <p id='pswrd'><NavLink>Forget Password?</NavLink></p>
          <button id='login'>Login</button>
        </form>
        <p id='signup'>Not registered yet? <NavLink to="/register">Create an Account</NavLink></p>
      </div>
    </div>
  )

}

export default Login