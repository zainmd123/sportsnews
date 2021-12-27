import './App.css';
import Sidebar from './components/Sidebar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Football from './pages/Football'
import Basketball from './pages/Basketball'
import Tennis from './pages/Tennis'
import Motorsports from './pages/Motorsports'
import Cricket from './pages/Cricket'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {useState} from 'react'

function App() {
  const [ user, setLoginUser] = useState({})

  const Page = () =>{
    if(user && user._id){
      return <Home/>
    }
    else{
      return <Login setLoginUser={setLoginUser}/>
    } 
  }
  const Page1 = () =>{
    if(user && user._id){
      return <Football/>
    }
    else{
      return <Login setLoginUser={setLoginUser}/>
    } 
  }
  const Page2 = () =>{
    if(user && user._id){
      return <Cricket/>
    }
    else{
      return <Login setLoginUser={setLoginUser}/>
    } 
  }
  const Page3 = () =>{
    if(user && user._id){
      return <Basketball/>
    }
    else{
      return <Login setLoginUser={setLoginUser}/>
    } 
  }
  const Page4 = () =>{
    if(user && user._id){
      return <Tennis/>
    }
    else{
      return <Login setLoginUser={setLoginUser}/>
    } 
  }
  const Page5 = () =>{
    if(user && user._id){
      return <Motorsports/>
    }
    else{
      return <Login setLoginUser={setLoginUser}/>
    } 
  }




  return(
    <Router>
      <Sidebar/>
      <Routes>
        <Route exact path= "/" element = {Page()}/>
        <Route exact path="/login" element = {<Login setLoginUser={setLoginUser}/>}/>
        <Route exact path="/signup" element = {<Signup/>}/>
        <Route exact path = '/football' element = {Page1()}/>
        <Route exact path = '/basketball' element = {Page3()}/>
        <Route exact path = '/tennis' element = {Page4()}/>
        <Route exact path = '/motorsports' element = {Page5()}/>
        <Route exact path = '/cricket' element = {Page2()}/>
      </Routes>
    </Router>
  );
  
}

export default App;
