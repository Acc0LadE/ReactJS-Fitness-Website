import React, { useState } from 'react'
import '../styles/NavbarStyles.css'
import { Link, useNavigate } from 'react-router-dom';
import { BiHomeAlt2 } from "react-icons/bi";

function Navbar() {
    const initialState=[false,false,false]
    const [isOpen,setOpen]=useState(initialState);
    const navigate=useNavigate()
    function onHover(index)
    {
        setOpen(prevStates=>{
            const curState=[...prevStates]
            curState[index]=true;
            return curState
        });
    }
    function NotOnHover(index)
    {
        setOpen(prevStates=>{
            const curState=[...prevStates]
            curState[index]=false;
            return curState
        });
    }
    
  return (
    <nav>
       

        <div className="NavContainer">
            <Link to='/homePage' className='RemoveLinkStyle'><BiHomeAlt2></BiHomeAlt2></Link>
            <ul onMouseEnter={()=>{onHover(0)}} onMouseLeave={()=>{NotOnHover(0)}}> FITNESS
                {isOpen[0] && (<div className="dropDown-contents">
                <ul> <Link to='/Importance' className='RemoveLinkStyle'>IMPORTANCE OF EXERCISE</Link></ul>
                <ul> GYMS NEAR ME</ul>
                <ul><Link to='/workoutPlanner' className='RemoveLinkStyle' >WORKOUT PLANNER</Link></ul>
                <ul><Link to='/protienSupplements' className='RemoveLinkStyle' >BUY PROTIEN POWDER AND SUPPLIMENTS</Link></ul>
                </div>)
                }
            
            </ul>
            <ul onMouseEnter={()=>{onHover(1)}} onMouseLeave={()=>{NotOnHover(1)}}> DIET AND NUTRITION
                {isOpen[1] && (<div className="dropDown-contents">
                <ul><Link to='/dietPlanner' className='RemoveLinkStyle'>DIET PLANNER</Link> </ul>
                <ul>BUY OUR MERCHANDISE</ul>
                </div>)
                }
            
            </ul>
            <ul onMouseEnter={()=>{onHover(2)}} onMouseLeave={()=>{NotOnHover(2)}}> PROFILE
                {isOpen[2] && (<div className="dropDown-contents">
                <ul><Link to="/About" className='RemoveLinkStyle'>MY PROFILE</Link></ul>
                <ul onClick={()=>{
                    localStorage.removeItem("email")
                    navigate("/")
                }}>SIGN OUT</ul>
                <ul>CONTACT US</ul>
                </div>)
                }
            
            </ul>
            
  

        </div>
       
        
    </nav>
  )
}

export default Navbar