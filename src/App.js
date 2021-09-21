import './App.css';
import Darkmode from './components/Darkmode';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {

    const [alert, setAlert] = useState(null);
    const [palette,setPalette] = useState('invisible') ;
    
    const showAlert = (message, type, state) =>{
        setAlert({
          msg: message,
          type: type,
          state: state,
        })
        setTimeout(() =>{
          setAlert(null);
        }, 1500);
    }

    const [mode, setMode] = useState('Enable DarkMode');
    
    const [dark, setDark] = useState({
        color: 'black',
        backgroundColor: 'white',
        
    })   

    const handleDark = () => {

        if(mode === "Enable DarkMode"){
            let newMode = "Disable DarkMode";
            setMode(newMode);
            document.body.style.backgroundColor = "rgb(39,50,78)"; 
           const newDark = {color: 'white',
              backgroundColor: 'rgb(39,50,78)',
              border: '1px solid white',
              
          }
            setDark(newDark)
            showAlert("Dark Mode has been Enabled!", "Success", "success");
            setPalette('visible');
        }else{
            let newMode = "Enable DarkMode";
            setMode(newMode);
            document.body.style.backgroundColor = "white"; 
            const newDark = {
                color: 'black',
                backgroundColor: 'white',
                
            }
            setDark(newDark)
            showAlert("Dark Mode has been Disabled!", "Success", "dark");
            setPalette('invisible');
        }
    }

    const red = () => {

      if(mode === "Disable DarkMode"){
          
          document.body.style.backgroundColor = "#440808"; 
         const newDark = {color: 'white',
            backgroundColor: '#440808',
            border: '1px solid white',
            
        }
          setDark(newDark)
          showAlert("Dark Mode color changed!", "Notice", "dark");
          setPalette('visible');
      }
    }

    const green = () => {

      if(mode === "Disable DarkMode"){
          document.body.style.backgroundColor = "#215936"; 
         const newDark = {color: 'white',
            backgroundColor: '#215936',
            border: '1px solid white',
            
        }
          setDark(newDark)
          showAlert("Dark Mode color changed!", "Notice", "dark");
          setPalette('visible');
      }
    }

    const purple = () => {

      if(mode === "Disable DarkMode"){
          
          document.body.style.backgroundColor = "#4D005B"; 
         const newDark = {color: 'white',
            backgroundColor: '#4D005B',
            border: '1px solid white',
            
        }
          setDark(newDark)
          showAlert("Dark Mode color changed!", "Notice", "dark");
          setPalette('visible');
      }
    }

  return (
    <Router>
    <div className="App">
      
      
      <Navbar title="WebSol"></Navbar>
      <Darkmode handleDark={handleDark}  mode={mode} palette={palette} red={red} green={green} purple={purple}></Darkmode>
      <Alert alert={alert}/>
      <div className = "container pt-5"  style={dark}>

      <Switch>

          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading = "First Form"></TextForm>
          </Route>

      </Switch>   
      </div>
    </div>
    </Router>
  );
}

export default App;
 