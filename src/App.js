import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import WorkoutPlanner from './components/WorkoutPlanner';
import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DietPlanner from './components/DietPlanner';
import HomePage from './components/HomePage';
import BuySupplements from './components/BuySupplements';
import SigninPage from './components/SigninPage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import ImpNutri from './components/ImpNutri';
import ImpExc from './components/ImpExc';
import About from './components/About';
import Contact from './components/Contact';
import ListOfExc from './components/ListOfExc';

function App() {
  //const [tab,setTab]=useState('home')
  
  console.log(localStorage)
  useEffect(() => {
    localStorage.setItem("signin",false)
    window.addEventListener("beforeunload", alertUser);
    return () => {
      
      window.removeEventListener("beforeunload", alertUser);
    };
  }, []);
  const alertUser = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
        
  return (
    <div className="header">
      <Navbar/>
      <div className='content'>
       <Routes>
        <Route path='/HomePage' element={<HomePage></HomePage>}></Route>
        <Route path='workoutPlanner' element={<WorkoutPlanner/>}/>
        <Route path='dietPlanner' element={<DietPlanner/>}/>
        <Route path='protienSupplements' element={<BuySupplements/>}/>
        <Route path='ImpNutri' element={<ImpNutri/>}/>
        <Route path='ListOfExc' element={<ListOfExc/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='/' element={<SigninPage/>}/>
        <Route path='LogIn' element={<LoginPage/>}/>
        <Route path='About' element={<ProfilePage/>}/>
       </Routes>
      </div>
    </div>
  );
}

export default App;
