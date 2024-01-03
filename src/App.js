import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from 'react'

import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {

  const [mode, setMode] = useState('light');/// dark mde is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
  const changeOrange=()=>{
    document.body.style.backgroundColor ='orange'
  }
  const changeRed=()=>{
    document.body.style.backgroundColor ='red'
  }
  const changeBlue=()=>{
    document.body.style.backgroundColor ='blue'
  }

  const toggleMode = () =>{
    if(mode==='dark'){
    setMode('light');
    document.body.style.backgroundColor ="white"
    showAlert("Light Mode has been unables","success");
    }
    else{
    setMode('dark');
    document.body.style.backgroundColor ="black"
    showAlert("Dark Mode has been unables","success");
    }
  }

  return (
    <>
      {/* pass props to Navbar function */}
      <Navbar webtitle="FirstWebsite"  changeOrange={changeOrange} changeBlue={changeBlue} changeRed={changeRed} contact="Contact Us" blog="Blogs" mode={mode} toggleMode={toggleMode}/>
      <Alert   alert={alert}/>
      <div className="container">
      <TextForm showAlert={showAlert} formheading="Enter Your Text Below :" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
