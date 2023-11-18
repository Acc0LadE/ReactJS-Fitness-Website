import React, { useEffect, useState } from 'react'
import "../styles/ProfilePageStyle.css"
import axios from 'axios'
import { baseURL } from '../constants/Constants'
const ProfilePage = () => {
    const [ans,setAns]=useState("")
    useEffect(()=>{
        
        axios.get(`${baseURL}getUserData/${localStorage.getItem("email")}`).then((res)=>
        {
            let x="" 
            console.log(res.data.response)
            x=Object.keys(res.data.response).map((val)=>{
                return (
                    <table className="custom-table">
                        <tbody>
                            <tr>
                                <td className='arrange'>{val}</td>
                                {
                                    Array.isArray(res.data.response[val])?(
                                        res.data.response[val]).map((t)=>{
                                            
                                            const v=(Object.keys(t).map((u)=>{
                                                return (
                                                    <div>
                                                        <p>{u} : {t[u]}</p>
                                                       
                                                    </div>
                                                    
                                                )

                                            }))
                                            return (
                                               <div>
                                                 {v}
                                                <br/>
                                               </div>
                                            )
                                            
                                        }):<td>{res.data.response[val]}</td>
                                    
                                }
                                <br/>
                                <td>{}</td> 
                            </tr>
                        </tbody>
                    </table>

                )
            })
            setAns(x)
           
        })
    },[])
  return (
    <div>
        {ans}
        
    </div>
  )
}

export default ProfilePage