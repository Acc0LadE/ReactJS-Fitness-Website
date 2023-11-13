import React, { useState } from 'react'
import protienData from './ProtienPowder.json'
import Card from '../model/Card'
import '../styles/BuySupplementsStyle.css'
const BuySupplements = () => {
    const [data,setData]=useState(protienData)
    
  return (
    <div className='grid-container'>
      {
        data.map((val)=>{
          return(
            <Card protienData={val} ></Card>
          )
        })
      }
    </div>
  )
}

export default BuySupplements