import React from 'react';
import { useState } from 'react';
import Menu from './menu';
import Footer from './footer';
import '../signin.css';
import { Navigate, useNavigate } from 'react-router-dom'

export default function signin() {
    const [user_name,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmpassword,setConfirmPassword] = useState('');
    const [role,setRole] = useState('user');
    const navigate = useNavigate();
    const handleSignUp = async(e) =>{
    e.preventDefault();
    console.log('123123');
    if(password!== confirmpassword){
        window.alert('Password not match');
        return;
    }
    console.log(user_name);
    try{
      const response = await fetch('http://127.0.0.1:3000/api/auth/register',{
        method: 'POST',
        headers:{
          'Content-Type':'application/json',

        },
        body:JSON.stringify({user_name,email,password,role}),
      });
      navigate('/login');
    }catch(error){
      console.log(error);
    }
    }
  return (
    <div className='App'>
        <Menu/>
        <div className='formContainer2'>
            <div className='form2'>
                <form onSubmit={handleSignUp}>
                    <h4>Name</h4>
                    <input name='name-insert2' placeholder='please type here' onChange={(e)=> setUserName(e.target.value)}></input>
                    <h4>Email</h4>
                    <input name='email-insert2' placeholder='please type here' onChange={(e)=> setEmail(e.target.value)}></input>
                    <h4>Password</h4>
                    <input name='email-insert2' placeholder='please type here' type='password' onChange={(e)=> setPassword(e.target.value)}></input>
                    <h4>Confirm Password</h4>
                    <input name='password-insert2' placeholder='please type here' type='password' onChange={(e)=> setConfirmPassword(e.target.value)}></input>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    </div>
  )
}
