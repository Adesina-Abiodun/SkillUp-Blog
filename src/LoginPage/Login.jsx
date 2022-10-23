import React from 'react'
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"
import {useState} from 'react'
import './Login.css'
import axios from 'axios'
import google from './img/google.svg'
import v1 from './img/v1.svg'
import v2 from './img/v1.svg'


function Login() {

  const { register, handleSubmit } = useForm();
  const {access, setAccess} = useState([

    {
      "token": "",
      isLoggedIn: true,
    }
  ]);

  const submitDetails = (data) => {
    axios.post("https://miniblogskillup.herokuapp.com/api/users/login", data, {
      headers:{
        "content-type":"application/json",
        "Authorization": access.token
      }
    })
    .then((result) => {
      console.log(result)
      alert(result.data.message);
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
      <div className='logleft'>
        <div className="logtxtcnt">
          <div className='logspace'></div>
          <NavLink className="loghome" to="/">SkillUp Africa Blog</NavLink>
          <h2 className="logtitle">The Ancient city of Rome and the history of the great city.</h2>
          <div id='logautor'>
            <h3 id='logolive'>Olive Junior</h3>
            <h4 id='loglead'>Lead Writer, SkillUp Africa</h4>
          </div>
        </div>
      </div>
      <div className='logright'>
        <div className='logform'>
          <div className='logwelcont'>
            <h1 id='logwelcm'>Welcome Back!</h1>
            <p id='logdetails'>Welcome back, please enter your details</p>
          </div>
          <form className='logfom' action="" onSubmit={handleSubmit(submitDetails)}>
            <input type="email" placeholder='Email Address' {...register("email", {required:true})} key={{}}/>
            <br />
            <input type="password" placeholder='Password' {...register("password", {required:true})} />
            <p id='logpswrd'><NavLink>Forget Password?</NavLink></p>
            <button id='login'>Login</button>
          </form>
          <p id='logsignup'>Not registered yet? <NavLink to="/register">Create an Account</NavLink></p>
        </div>
``      </div>
    </div>
  )

}

export default Login