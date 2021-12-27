import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import './Signup'



const Login = ({setLoginUser}) => {

  let navigate = useNavigate()

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  

  const login = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/login", {email: email, password: password})
    .then(res => {
      alert(res.data.message)
      setLoginUser(res.data.user)
      navigate('/')
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
      <div className  = "body">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <title>Login / Sign Up Form</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <link rel="stylesheet" href="login.css" />
        <div className="container">
          <form className="form" id="login">
            <h1 className="form__title">Login</h1>
            <div className="form__message form__message--error" />
            <div className="form__input-group">
              <input type="text" className="form__input" autoFocus  value = {email} onChange= {(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
              <div className="form__input-error-message" />
            </div>
            <div className="form__input-group">
              <input type="password" className="form__input" autoFocus value = {password} onChange= {(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
              <div className="form__input-error-message" />
            </div>
            <button className="form__button" type="submit" onClick={login}>Login</button>

            <p className="form__text">
              <a className="form__link"  id="linkCreateAccount" href="/signup">Don't have an account? Create account</a>
            </p>
          </form>
        </div>
      </div>
    );

      
  }
  export default Login;