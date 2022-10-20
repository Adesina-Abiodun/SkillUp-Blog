import "./register.css"
import { NavLink } from "react-router-dom"

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

      <div className="register-form">
        <h1>Form</h1>
      </div>

    </section>
  );
}

export default Register;