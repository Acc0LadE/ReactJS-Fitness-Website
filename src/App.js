import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import WorkoutPlanner from './components/WorkoutPlanner';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import DietPlanner from './components/DietPlanner';
import HomePage from './components/HomePage';
import BuySupplements from './components/BuySupplements';

function App() {
  const [tab,setTab]=useState('home')
  
  return (
    <div className="header">
      <Navbar/>
      <div className='content'>
       <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='workoutPlanner' element={<WorkoutPlanner/>}/>
        <Route path='dietPlanner' element={<DietPlanner/>}/>
        <Route path='protienSupplements' element={<BuySupplements/>}/>
       </Routes>
      </div>
    </div>
  );
}

export default App;
