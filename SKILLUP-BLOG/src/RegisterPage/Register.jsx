import "./register.css"
import { NavLink } from "react-router-dom"
import { useForm } from "react-hook-form"

const Register = () => {
  return (
    <section className="register-wrapper">

      <div className="register-banner">
        <NavLink to="/">SkillUp Africa Blog</NavLink>

        <div className="banner-text">
          <h2>The Ancient city of Rome and the history of the great city.</h2>
          <span>
            <h3>Olive Junior</h3>
            <h4>Lead Writer, SkillUp Africa</h4>
          </span>
        </div>
      </div>

      <div className="form-wrapper">

        <div className="register-form">

          <div className="form-title">
            <h2>Create an account</h2>
            <p>Let’s start a journey to great articles</p>
          </div>

          <form>
            <input type="text" placeholder="Name" />
            <br />
            <input type="email" placeholder="Email Address" />
            <br />
            <input type="text" placeholder="Add profile picture" />
            <br />
            <input type="password" placeholder="Password" />
            <br />
            <input type="password" placeholder="Confirm Password" />
            <br />
          </form>

          <button type="submit">Create an account</button>
          <p>Already have an account? <NavLink to="/login">Log in</NavLink></p>

        </div>
      </div>

    </section>
  );
}

export default Register;