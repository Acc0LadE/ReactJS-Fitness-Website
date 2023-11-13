import React, { useEffect, useState } from 'react'
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import '../styles/CardStyles.css'
import axios from 'axios';
import { baseURL } from '../constants/Constants';
const Card = (props) => {
    // console.log(props)
    const[quantity,setQuantity]=useState(0);
    const [bought,setBought]=useState(false);
    const [data,setData]=useState({
        'name':props.protienData['name'],
        'quantity':quantity,
        'price':props.protienData['price']
    })
    useEffect(()=>{
        setData({...data,"quantity":quantity})
    },[quantity])
    function BoughtProtien(event)
    {
        if(quantity>0)
        {
            axios.post(`${baseURL}postProtienSupplement`,{protienSupplements:data})
            .then((res)=>{
              console.log(res.data)
            })
                  setBought(true);

        }
       


    }
    function DeleteProtien(event)
    {
        axios.post(`${baseURL}deleteProtienSupplement`,{protienSupplements:data})
  .then((res)=>{
    console.log(res.data)
  })
        setBought(false);
    }
    function UpdateProtien(event)
    {
        axios.put(`${baseURL}updateProtienSupplement`,{protienSupplements:data})
  .then((res)=>{
    console.log(res.data)
  })
        
    }
  return (
    <div className='card'>
        <img src={props.protienData['image']} alt={props.protienData['name']} />
        <div className="card-body">
            <h3 className="card-title">{props.protienData['name']}</h3>
            <p className="card-content">{props.protienData['brand']}</p>
            <div className="card-content">
                <p>{props.protienData['flavor']}</p>
                <p>{props.protienData['size']}</p>
            </div>
            <p className="card-content">{ <p>{props.protienData['price']}</p>}</p>
            <div className="card-content">
                <AiOutlinePlusSquare onClick={(e)=>{
                   setQuantity(quantity+1);
                }}/>
                <AiOutlineMinusSquare onClick={(e)=>{
                    if(quantity>0)
                    {
                        setQuantity(quantity-1);
                    }
                   
                }}/>
                <input type='Number' value={quantity} onChange={(e)=>{
                    setQuantity(e.target.value)
                }}></input>
            </div>
            
            {bought?
            <div>
            <button className="card-content" onClick={UpdateProtien}>Update</button>
            <button className='card-content' onClick={DeleteProtien}>Delete</button>
            </div>
            :<button className="card-content" onClick={BoughtProtien}>Buy</button>}
        </div>
        
    </div>
  )
}

export default Card