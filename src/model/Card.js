import React, { useEffect, useState } from 'react'
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import '../styles/CardStyles.css'
import axios from 'axios';
import { baseURL } from '../constants/Constants';
const Card = (props) => {
    // console.log(props)
    const[quantity,setQuantity]=useState(0);
    const [bought,setBought]=useState(props.updated=="False"?true:false);
    const [data,setData]=useState({
        'name':props.protienData['name'],
        'quantity':quantity,
        'price':props.protienData['price']
    })
    useEffect(()=>{
        setData({...data,"quantity":quantity})
    },[quantity])
    useEffect(()=>{
        if(props.updated=="True")
        {
            setBought(true)
        }
        else{
            setBought(false)
        }
    },[])
    function BoughtProtien(event)
    {
        if(quantity>0)
        {
            axios.post(`${baseURL}postProteinSupplement`,{proteinSupplements:data,email:localStorage.getItem("email")})
            .then((res)=>{
              console.log(res.data)
            })
                  setBought(true);

        }
        //props.updateChange()
       


    }
    function DeleteProtien(event)
    {
        axios.post(`${baseURL}deleteProteinSupplement`,{proteinSupplements:data,email:localStorage.getItem("email")})
  .then((res)=>{
    console.log(res.data)
    props.updateChange(data.name)
    

  })
        setBought(false);
    }
    function UpdateProtien(event)
    {
        axios.put(`${baseURL}updateProteinSupplement`,{proteinSupplements:data,email:localStorage.getItem("email")})
  .then((res)=>{
    console.log(res.data)
  })
        
    }
  return (
    <div className='card'>
        {/* {
            console.log(props)
        } */}
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
            <br/>
            {props.updated=="True"||bought==true?
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