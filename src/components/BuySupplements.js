import React, { useContext, useEffect, useState } from 'react'
import protienData from './ProtienPowder.json'
import Card from '../model/Card'
import '../styles/BuySupplementsStyle.css'
import axios from 'axios'
import { baseURL } from '../constants/Constants'
const BuySupplements = () => {
    const [data,setData]=useState(protienData)
    const [toBuy,setToBuy]=useState([])
    const [change,setChange]=useState(false)
    
    useEffect(()=>{
      setToBuy([])
      axios.post(`${baseURL}getproteinSupplement`,{email:localStorage.getItem("email")}).then((response)=>{
        console.log(response.data)
        response.data.response.map((val)=>{
          console.log(val.name)
          
          setToBuy(prev=>[...prev,val.name])
        })
      })
    },[change])
    function check(val)
    {
      let x=false;
      [...toBuy].map((item, index) => 
      {
        if(item==val.name)
        {
          x= true
          return;
        }

      }
       
      )
      
     return x
      
    }

    function updateChange(ch)
    {
      console.log(ch)
      setChange(ch)
    }
    
  return (
    <div className='grid-container'>
   {
    console.log(localStorage.getItem('email'))
   }
      
      {
        
        data.map((val)=>{
          return check(val)?<Card protienData={val} updated="True"  updateChange={updateChange}></Card>:<Card protienData={val} updated="False" updateChange={updateChange}></Card>
        })
      }
    </div>
  )
}

export default BuySupplements