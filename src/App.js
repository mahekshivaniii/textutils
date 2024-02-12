import React from "react"
import  { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert"
import Services from "./Components/Services"

function App() {
  const[mode,setMode] = useState('light')
  const[alert,setAlert] = useState(null)


  const showAlert = (type,message) => {
    setAlert({
      
      type:type,
      message:message
    })
    setTimeout( () =>{
      setAlert(null)
    } , 3000 );

  }
   const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("success","Dark mode has been enabled")
      document.title = 'textUtils.darkmode'
      setInterval(() =>{
        document.title = 'textutils mahek shivani'
      },2000)
      setInterval(() => {
     document.title = "hello "
      },1500)
    }
    else {
      setMode('light')
      document.body.style.backgroundColor =  'white'
      document.title = 'textUtils-Home'
    }
  }
  return (
   <> 
    
  <Navbar   title = "TextUtils"   mode={mode} toggleMode = {toggleMode}/>
  <Alert alert={alert}/> 
  <div className="container my-3"> 
            <Services/>
          {/* <TextForm showAlert={showAlert} textAreaTitle="Enter your text" mode={mode}/> */}
       
 </div>
 
   </>
  );
}

export default App;

