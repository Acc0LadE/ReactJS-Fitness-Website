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
    const [ifsubmit,setSubmit]=useState(false)
    const [emailExist,setEmailExist]=useState(false)
    const navigate=useNavigate()
    function validateEmail(val)
    {
        
         let checkDot=0;
         let checkAt=0;
         for(let i=0;i<val.length;i++)
         {
            if(val[i]==".")
            {
                checkDot+=1;
            }
            else if(val[i]=="@")
            {
                checkAt+=1;
            }
         }
         console.log(checkAt,checkDot)
         return(checkAt==1 && checkDot==1 )

    }
    function onchangeValues(event,value)
    {
        setSubmit(false)
        
        
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
                localStorage.setItem("signin",true)
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
                <div className='InputFeature'>
                <input type="text" id="username" value={form.name}  name="name"  className="textarea" placeholder="Enter your username"   onChange={(e)=>onchangeValues(e,"name")} required/>
                {form.name=="" && ifsubmit==true?<p >Please Enter UserName !</p>:""}

                </div>
                
                <br/>
                <input placeholder='Password'  name='password' className='textarea' value={form.password} onChange={(e)=>onchangeValues(e,"password")} required></input>
                <br/>
                <input type='number' name='age' placeholder='age' className='textarea' value={form.age} onChange={(e)=>onchangeValues(e,"age")} required></input>
                <br/>
                <input required type='email' name='email' placeholder='email' className='textarea' value={form.email}  onChange={(e)=>{onchangeValues(e,"email"); localStorage.setItem('email',e.target.value)}}></input>
            </div>
            {console.log(emailExist)}
            {
                
                emailExist?<p><Link to="/LogIn">Go to Login page</Link></p>:<p></p>
            }
            <button className='buttonStyle'  onClick={(e)=>{console.log(validateEmail(form.email));setSubmit(true); if (validateEmail(form.email))
            {
                
                postData(e);
            }}}>Submit</button>
            <button className='buttonStyle' onClick={(e)=>{navigate("/LogIn")}}>Login</button>
            
               
            </div>
        
    </div>
  )
}

export default SigninPage