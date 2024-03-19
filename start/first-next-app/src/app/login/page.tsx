'use client'
import { LoginForm } from '@/types/loginForm';
import React, { useState } from 'react'
import Container from '../components/container/container';

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
    <Container>
      <div className='my-9 text-xl w-8/12 text-center'>Login</div>
      {loginSucess ? (
        <>
          <h1>Welcome {loginUser.userName}</h1>
          <button onClick={() => setLoginSucess(false)}>Logout</button>
        </>
      ):
      <div className='flex flex-col items-center h-5/6 w-8/12'>
        <form className='flex h-full flex-col items-center w-full p-5'>
          <label className='my-2 w-8/12'>User Name: </label>
          <input className='mb-6 border-b-4 bg-transparent border-pink-600 w-8/12' placeholder='Enter User Name' name='userName' onChange={(e) => onLoginFormChange(e)} type='text' value={loginUser.userName}/>
          <label className='mb-2 w-8/12'>Password: </label>
          <input className='mb-6 border-b-4 bg-transparent focus:border-b-4 border-pink-600 w-8/12' placeholder='Enter your password' name='password' onChange={(e) => onLoginFormChange(e)} type='password' value={loginUser.password}/>
          <button className='w-16 my-3 p-2 bg-sky-100 hover:bg-sky-300 rounded-xl border-2 hover:border-sky-800 border-sky-800' type='submit' onClick={onLoginClick}>Login</button>
        </form>
      </div>
      }
    </Container>
  )
}
