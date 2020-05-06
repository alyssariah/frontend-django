import React, {useState} from 'react'
import {loginUser} from '../services/api-helper'
import '../css/LogIn.sass'
import {Redirect} from 'react-router-dom'

function LogIn(props){
    const [userLog, setUserLog] = useState({
        username: "",
        password: ""
      })
    const [verify, setVerify] = useState(false)

    const handleUserNameChange = e => {
    let newLog = {...userLog};
    newLog.username = e.target.value;
    setUserLog(newLog);
    }
    const handlePasswordChange = e => {
    let newLog = {...userLog};
    newLog.password = e.target.value;
    setUserLog(newLog);
    } 
    const handleLogin = async (e) => {
    console.log(userLog)
    e.preventDefault()
    const res = await loginUser(userLog)
    if(!res.data){
        alert("A user with that username or password was not found")
    }
    console.log(res.data)
    props.setUserInfo(res.data)
    localStorage.setItem('user', JSON.stringify(res.data))
    setVerify(true)
    
    }
    return(
        <div className='background'>
            <form onSubmit={handleLogin}>
                <img className="logo" src="https://cdn.pixabay.com/photo/2017/05/15/21/56/apple-2316234_960_720.png"/>
                <h3>Welcome to Nutrition Log!</h3>
                <p>A place to log all your meals</p>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleUserNameChange}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={handlePasswordChange} />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Keep me logged in</label>
                </div>
                <button type="submit" class="btn primary">Log In!</button>
            </form>
        {/* <form onSubmit={handleLogin}>
            <h1>Please Log In!</h1>
            <div><label>Username:</label><input type='text' onChange={handleUserNameChange} placeholder="Username or Email Address"/></div>
            <div><label>Password:</label><input type='text' onChange={handlePasswordChange} placeholder="Password (case sensitive)"/></div>
            <button>Log In!</button>
        </form> */}
        {verify && <Redirect to="/welcome" />}
        </div>
    )
}
export default LogIn