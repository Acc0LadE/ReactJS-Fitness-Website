import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import WorkoutPlanner from './components/WorkoutPlanner';
import { createContext, useState } from 'react';
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

function App() {
  const [tab,setTab]=useState('home')
  
  
  
        
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
        <Route path='ImpExc' element={<ImpExc/>}/>
        
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
