import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import DashBoard from "./Pages/DashBoard";
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';  
import PrivateRoute from './Components/PrivateRoute';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState (false);

  return (
    <div className='w-screen h-screen bg-[#000814] flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>

        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}/>
        <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
                <DashBoard />
            </PrivateRoute>            

        } />

      </Routes>
    </div>
  )
}

export default App
