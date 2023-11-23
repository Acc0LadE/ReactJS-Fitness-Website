import React, { useState } from 'react'
import '../styles/SignInStyle.css'
import axios from 'axios'
import { baseURL } from '../constants/Constants'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const [form,setForm]=useState({
        "password":"",
        "email":""
    })

 const navigate=useNavigate();


    
    function onchangeValues(event,value)
    {
        
        
        return (setForm({...form,[value]:event.target.value}))

    }
    function postData(event)
    {let x=false
        axios.get(`${baseURL}getUserData/${form.email}`).then((res)=>
        {
            
            
            if(res.data.response.password==form.password)
            {

                navigate("/HomePage")
                
               
                return;
            }
           
        })
        
       
       
        
        
    }
  return (
    <div>
    {/* {
        console.log(emailExist)
    } */}
    
   
        <div className='Card'>
        
        <div className="input-group">
            
        <input type='email' name='email' placeholder='email' className='textarea' value={form.email}  onChange={(e)=>{onchangeValues(e,"email"); localStorage.setItem('email',e.target.value)}}></input> 
            <br/>
            <input placeholder='Password'  name='password' className='textarea' value={form.password} onChange={(e)=>onchangeValues(e,"password")}></input>
            
           
        </div>
        
        <button className='buttonStyle'  onClick={(e)=>{console.log(form);localStorage.setItem("signin",true); postData(e)}}>Submit</button>
        
           
        </div>
    
</div>
  )
}

export default LoginPage