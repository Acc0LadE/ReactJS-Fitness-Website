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

function App() {
  const [tab,setTab]=useState('home')
  
  
  return (
    <div className="header">
        <Navbar/>

      
      
      <div className='content'>
       <Routes>
        <Route path='/homePage' element={<HomePage></HomePage>}></Route>
        <Route path='workoutPlanner' element={<WorkoutPlanner/>}/>
        <Route path='dietPlanner' element={<DietPlanner/>}/>
        <Route path='protienSupplements' element={<BuySupplements/>}/>
        <Route path='/' element={<SigninPage/>}/>
        <Route path='LogIn' element={<LoginPage/>}/>
        <Route path='About' element={<ProfilePage/>}/>
       </Routes>
      </div>
    </div>
  );
}

export default App;
