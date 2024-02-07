import { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import Services from "./Components/Services";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//    Link
// } from "react-router-dom";

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
   {/* <Router> */}
  <Navbar   title = "TextUtils"  aboutText = "Services" mode={mode} toggleMode = {toggleMode}/>
  {/* <Alert alert={alert}/> */}
  <div className="container my-3"> 
  {/* <Switch>
          <Route path="/Services">
            <Services />
          </Route> */}
          
          {/* <Route path="/"> */}
          <TextForm showAlert={showAlert} textAreaTitle="Enter your text" mode={mode}/>
            
          {/* </Route> */}
        {/* </Switch> */}
        </div>
        {/* </Router> */}
 {/* { <TextForm showAlert={showAlert} textAreaTitle="Enter your text" mode={mode}/> } */}
     <Services mode={mode}/>  
 
 
   </>
  );
}

export default App;

