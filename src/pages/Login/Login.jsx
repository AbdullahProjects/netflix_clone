import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Login.css'

const Login = () => {
  const [signState, setSignState] = useState('Sign In');

  return (
    <div className='login'>
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState==="Sign In"? <></> : <input type="text" placeholder='Enter your name' />}
          <input type="email" placeholder='Enter your Email' />
          <input type="password" placeholder='Password'/>
          <button>{signState}</button>
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