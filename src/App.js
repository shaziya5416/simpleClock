import logo from './logo.svg';
import './App.css';

import React from 'react'
import { useState } from 'react';

const App = () => {
  const time = new Date().toLocaleTimeString()
  const [currTime,setcurrTime]=useState(time);
  const updatedTime=()=>{
    const time = new Date().toLocaleTimeString()
    setcurrTime(time);
  }
  setInterval(updatedTime,1000);
  return (
    <>
    <h1>{currTime}</h1>
    </>
  )
}

export default App