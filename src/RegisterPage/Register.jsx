import "./register.css"
import axios from "axios"
import { NavLink } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useState } from "react"


const Register = (formData) => {
  const { register, handleSubmit, formState: { errors } } = useForm({});

  // const [confirmPassword, setConfirmPassword] = useState()
  const onSubmit = async (data) => {

    formData = data
    if (formData.password !== formData.confirmPassword) {
      return alert("Password does not match")
    } else {
      // console.log(data);
      // console.log(formData);
      // console.log(formData.password);
      // console.log(formData.confirmPassword);

      axios
        .post("https://miniblogskillup.herokuapp.com/api/users/register", data, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": true,
          },
        })
        .then((response) => {
          console.log(response.data.message);
        });

    }
  };


  return (
    <main className="register-wrapper">

      <div className="register">

        <section className="register-banner">
          <NavLink to="/">SkillUp Africa Blog</NavLink>

          <div className="banner-text">
            <h2>The Ancient city of Rome and the history of the great city.</h2>
            <span>
              <h3>Olive Junior</h3>
              <h4>Lead Writer, SkillUp Africa</h4>
            </span>
          </div>
        </section>

        <section className="form-wrapper">

          <div className="register-form">

            <div className="form-title">
              <h2>Create an account</h2>
              <p>Let’s start a journey to great articles</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>


              <input type="text" placeholder="Name"
                {...register("username", {
                  required: true, maxLength: 20
                })}
              />
              <p id="text">{errors.username?.type === "required" && "Your name is required"}</p>
              <p id="text">{errors.username?.type === "maxLength" && "Your name is should not be more than 10 characters long"}</p>


              <input type="email" placeholder="Email Address"
                {...register("email", {
                  required: true,
                  pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })}
              />
              <p id="text">{errors.email?.type === "required" && "Please enter an email address"}</p>
              <p id="text">{errors.email?.type === "pattern" && "Your email address is not valid"}</p>


              <input type="password" placeholder="Password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                })} />
              <p id="text">{errors.password?.type === "required" && "Please enter a password"}</p>
              <p id="text">{errors.password?.type === "pattern" && "Password must contain letters,Uppercase, Numbers, special character and should not be less than 6 and more than 15 characters"}</p>


              <input type="password" placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: true,
                  pattern: formData.password
                })} />
              {errors.confirmPassword?.type === "pattern" && "Password do not match"}


              <br />
              <button type="submit">Create an account</button>
            </form>

            <p>Already have an account? <NavLink to="/login">Log in</NavLink></p>

          </div>
        </section>

      </div>
    </main>
  );
}

export default Register;