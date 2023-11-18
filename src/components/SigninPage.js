import React, { useContext, useEffect, useState } from 'react'
import '../styles/SignInStyle.css'


import axios from 'axios'
import { baseURL } from '../constants/Constants'
import { Link, useNavigate } from 'react-router-dom'
const SigninPage = () => {
    const [form,setForm]=useState({
        "name":"",
        "password":"",
        "age":"",
        "email":""
    })
    const [emailExist,setEmailExist]=useState(false)
    const navigate=useNavigate()
    function onchangeValues(event,value)
    {
        
        
        return (setForm({...form,[value]:event.target.value}))

    }
    function postData(event)
    {let x=false
        axios.get(`${baseURL}getUserData/${form.email}`).then((res)=>
        {
            
            console.log(res.data.response)
            if(res.data.response!=null)
            {
                x=true
                setEmailExist(x)
                return;
            }
           
        })
        .then((res1)=>{
            if(x==false)
            {
                axios.post(`${baseURL}postUserData`,{form}).then((res)=>{
                    console.log(res.data.response)
                })
                navigate("/HomePage")
            }
            

        }).then((res2)=>{})
        setForm({
            "name":"",
            "password":"",
            "age":"",
            "email":""
        })
        setEmailExist(false)
       
        
        
    }
   
    


  return (
    <div>
        {/* {
            console.log(emailExist)
        } */}
        
       
            <div className='Card'>
            
            <div className="input-group">
                
                <input type="text" id="username" value={form.name}  name="name"  className="textarea" placeholder="Enter your username"   onChange={(e)=>onchangeValues(e,"name")}/>
                <br/>
                <input placeholder='Password'  name='password' className='textarea' value={form.password} onChange={(e)=>onchangeValues(e,"password")}></input>
                <br/>
                <input type='number' name='age' placeholder='age' className='textarea' value={form.age} onChange={(e)=>onchangeValues(e,"age")}></input>
                <br/>
                <input type='email' name='email' placeholder='email' className='textarea' value={form.email}  onChange={(e)=>{onchangeValues(e,"email"); localStorage.setItem('email',e.target.value)}}></input>
            </div>
            {console.log(emailExist)}
            {
                
                emailExist?<p><Link to="/LogIn">Go to Login page</Link></p>:<p></p>
            }
            <button className='buttonStyle'  onClick={(e)=>{console.log(form); postData(e)}}>Submit</button>
            
               
            </div>
        
    </div>
  )
}

export default SigninPage