'use client'
import { LoginForm } from '@/types/loginForm';
import React, { useEffect, useState } from 'react'
import './page.css'

export default function Login() {

  const [loginUser, setLoginUser] = useState<LoginForm>({userName: "", password: ""});
  const [loginSucess, setLoginSucess] = useState<boolean>(false);

  const onLoginClick = (e:any) => {
    if(loginUser.userName === "priya" && loginUser.password === "2105"){
      setLoginSucess(true);
    }
  }

  const onLoginFormChange = (e:any) => {
    e.preventDefault();
    console.log(e.target.name)
    setLoginUser((prev) => ({
      ...prev,
      [e.target.name]:e.target.value 
    }))
    console.log(loginUser);
  }

  return (
    <div className='container'>
      <div className='login-container'>Login</div>
      {loginSucess ? (
        <>
          <h1>Welcome {loginUser.userName}</h1>
          <button id='login-button' onClick={() => setLoginSucess(false)}>Logout</button>
        </>
      ):
      <div className='form-container'>
        <form className='login-form'>
          <label className='input-login-text'>User Name: </label>
          <input className='input-login' id='user-input' placeholder='Enter User Name' name='userName' onChange={(e) => onLoginFormChange(e)} type='text' value={loginUser.userName}/>
          <label className='input-login-text'>Password: </label>
          <input className='input-login' id='user-password' placeholder='Enter your password' name='password' onChange={(e) => onLoginFormChange(e)} type='password' value={loginUser.password}/>
          <button type='submit' id='login-button' onClick={onLoginClick}>Login</button>
        </form>
      </div>
      }
    </div>
  )
}
