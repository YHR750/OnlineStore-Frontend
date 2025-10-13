import React from 'react'
import {useState} from 'react'
import Menu from './menu'
import Footer from './footer'
import { useNavigate } from 'react-router-dom'
import '../Login.css'

export default function login() {
  const[email, setEmail]=useState('');
  const[password, setPassword]=useState('');
  const[error, setError]=useState('');
  const navigate = useNavigate();
  const handleLogin = async(e) =>{
    e.preventDefault();
    try{
      const response = await fetch('http://127.0.0.1:3000/api/auth/login',{
        method: 'POST',
        headers:{
          'Content-Type':'application/json',

        },
        body:JSON.stringify({email,password}),
      });
      const data = await response.json();
      if (response.ok){
        localStorage.setItem('token',data.token);
        localStorage.setItem('role',data.role);
        if (data.role === 'admin'){
          navigate('/admin');
        }else{
          navigate('/userpage');
        }
      }else{
        setError(data.message);
      }
    }catch(error){
      setError('an error occured');
    }
  };
  return (
    <div className='App'>
      <Menu/>
      <div className='formContainer'>
        <div className='form'>
          <form className='formdiv' onSubmit={handleLogin}>
            <h4>Email</h4>
            <input name='email-insert' placeholder='please type here' onChange={(e) => setEmail(e.target.value)}></input>
            <h4>Password</h4>
            <input name='password-insert' placeholder='please type here' type='password' onChange={(e) => setPassword(e.target.value)}></input>
            <button type='submit'>Log In</button>
          </form>
        </div>
      </div>
    </div>
  )
}
