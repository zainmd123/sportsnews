import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {

    let navigate = useNavigate()

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[reEnterPassword, setreEnterPassword] = useState('');

    const signup = (e) => {
        e.preventDefault()
      
        if( name && email && password && (password ===reEnterPassword)){
            axios.post("http://localhost:4000/signup", {name: name, email:email, password:password, reEnterPassword: reEnterPassword})
            .then(res => {
              alert(res.data.message) 
              navigate('/login')
            })
            .catch(error=>{
              console.log(error)
            })
        } 
        else {
            alert("invalid input")
        }
        
    }

      return (
        <div className  = "body">
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charSet="utf-8" />
          <title>Sign Up Form</title>
          <link rel="shortcut icon" href="/assets/favicon.ico" />
          <link rel="stylesheet" href="login.css" />
          <div className="container">
            <form className="form" id="login">
              <h1 className="form__title">Sign Up</h1>
              <div className="form__message form__message--error" />
              <div className="form__input-group">
                <input type="text" className="form__input" autoFocus value = {name} onChange= {(e)=>{setName(e.target.value)}} placeholder="Username" />
                <input type="text" className="form__input"  value = {email} onChange= {(e)=>{setEmail(e.target.value)}} autoFocus placeholder="Email ID" />
                <div className="form__input-error-message" />
              </div>
              <div className="form__input-group">
                <input type="password" className="form__input"  value = {password} onChange= {(e)=>{setPassword(e.target.value)}} autoFocus placeholder="Password" />
                <input type="password" className="form__input"  value = {reEnterPassword} onChange= {(e)=>{setreEnterPassword(e.target.value)}} autoFocus placeholder="Confirm Password" />
                <div className="form__input-error-message" />
              </div>
              <button className="form__button" type="submit"  onClick={signup}>Sign Up</button>
            </form>
          </div>
        </div>
      );
    }
  export default Signup;