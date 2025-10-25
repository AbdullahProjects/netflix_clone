import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Login.css'
import { loginUser, signupUser } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState] = useState('Sign In');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault(); 
    setLoading(true);
    if(signState==="Sign In"){
      await loginUser(email, password);
    } else {
      await signupUser(name, email, password);
    }
    setLoading(false);
  }

  return (
    loading?
    <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form onSubmit={user_auth}>
          {signState==="Sign In"? <></> : <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} placeholder='Enter your name' />}
          <input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter your Email' />
          <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder='Password'/>
          <button type='submit'>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p className='need-help'>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Sign In"?
            <p>New to Netflix? <span onClick={() => {setSignState("Sign Up")}}>Join Now</span></p>:
            <p>Already have account? <span onClick={() => {setSignState("Sign In")}}>Sign In Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login