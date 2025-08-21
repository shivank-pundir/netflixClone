import React, { useState } from 'react'
import "./login.css"
import logo from '../../../assests/logo.png';
import { login, signUp } from '../../../firebase';
import netflix_spinner from '../../../assests/netflix_spinner.gif'

const Login = () => {

  const [signState, setSignState]= useState("Sign In");
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [loading, setLoading] = useState(false);

  const user_auth = async(event) => {
    setLoading(true);
    event.preventDefault();
    if(signState === 'Sign In'){
      await login(email, password);
    }else{
      await signUp(name, email, password);
    }
    setLoading(false);
  }


  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div> :
    <div className='login'>
      <img src={logo} className='login-logo'alt="" />
      <div className="login-form">
        <h2>{signState}</h2>
        <form >
          {signState ==='Sign Up'?  <input value={name} onChange={(e) =>{setName(e.target.value)}}
          type="text" placeholder='Enter Your Name' /> : <></>}
            
                    <input value={email} onChange={(e) =>{setEmail(e.target.value)}}
                    type="Email" placeholder='Enter Your  Email' />
                    <input value={password} onChange={(e) =>{setPassword(e.target.value)}}
                    type="password" placeholder='Enter Your Password' />
                    <button onClick={user_auth} type='submit'>{signState}</button>
                    <div className="form-help">
                      <div className="remember">
                        <input type="checkbox" />
                        <label htmlFor="">Remember Me</label>
                      </div>
                      <p>Need Help?</p>
                    </div>

        </form>
        <div className="font-switch ">
               {signState ==='Sign Up'? <p>Allready Have Account? <span onClick={() => {setSignState("Sign In")}}>Sign In</span></p>  : 
               <p >New In Netflix?<span onClick={() => {setSignState("Sign Up")}} >Sign Up Now</span></p>}

          

        </div>
      </div>
    </div>
  )
}

export default Login
