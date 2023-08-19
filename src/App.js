import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const[mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#200e43';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return ( 
    <>
      <Navbar title="FabulousText"  mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TextForm heading="Enter Text to Convert" mode={mode}/>
      </div>
    </>
  );
}

export default App;
