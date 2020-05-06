import React,{useState} from 'react';
import './App.sass';
import {Route, Link, Switch, Redirect} from 'react-router-dom'
import LogIn from './components/LogIn'
import Home from './components/Home'
import Welcome from './components/Welcome'
import Signup from './components/SignUp'
import MyLog from './components/MyLog'


function App() {
  const [userInfo, setUserInfo] = useState(()=>{
    const result = localStorage.getItem('user')
    return result? JSON.parse(result): []
  })
  
  return (
    <main>
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route path='/login'><LogIn setUserInfo={setUserInfo}/></Route>
        <Route path='/signup'><Signup setUserInfo={setUserInfo}/></Route>
        <Route path='/welcome'><Welcome userInfo={userInfo}/></Route>
        <Route path='/mylog'><MyLog userInfo={userInfo}/></Route>
        <Redirect to='/'/>
      </Switch>
    </main>
  );
}

export default App;
