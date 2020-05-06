import React, {useState} from 'react'
import {registerNewUser} from '../services/api-helper'
import {Redirect} from 'react-router-dom'

function Signup(props){
    const [userLog, setUserLog] = useState({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: ""
      })
    const [verify, setVerify] = useState(false)

    const handleUserNameChange = e => {
        let newLog = {...userLog};
        newLog.username = e.target.value;
        setUserLog(newLog);
    }
    const handleUserEmailChange = e => {
        let newLog = {...userLog};
        newLog.email = e.target.value;
        setUserLog(newLog);
    }
    const handleUserFirstChange = e => {
        let newLog = {...userLog};
        newLog.first_name = e.target.value;
        setUserLog(newLog);
    }
    const handleUserLastChange = e => {
        let newLog = {...userLog};
        newLog.last_name = e.target.value;
        setUserLog(newLog);
    }
    const handlePasswordChange = e => {
        let newLog = {...userLog};
        newLog.password = e.target.value;
        setUserLog(newLog);
    } 
    const handleSignUp = async (e) => {
        console.log(userLog)
        e.preventDefault()
        const res = await registerNewUser(userLog)
        if(!res.data){
            alert("A person with that username already exists")
        }
        console.log(res.data)
        props.setUserInfo(res.data)
        localStorage.setItem('user', JSON.stringify(res.data))
        setVerify(true)
    
    }
    return(
        <div className="background">
            <form onSubmit={handleSignUp}>
                <img className="logo" src="https://cdn.pixabay.com/photo/2017/05/15/21/56/apple-2316234_960_720.png"/>  
                <h3>Welcome to Nutrition Log!</h3>
                <p>A place to log all your meals</p>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleUserNameChange}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleUserEmailChange}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">First Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleUserFirstChange}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleUserLastChange}/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={handlePasswordChange} />
                </div>
                <button type="submit" class="btn primary">Sign Up!</button>
            </form>
        {/* <form onSubmit={handleSignUp}>
            <h1>Sign Up!</h1>
            <div><label>Username:</label><input type='text' onChange={handleUserNameChange}/></div>
            <div><label>Email:</label><input type='text' onChange={handleUserEmailChange}/></div>
            <div><label>First Name:</label><input type='text' onChange={handleUserFirstChange}/></div>
            <div><label>Last Name:</label><input type='text' onChange={handleUserLastChange}/></div>
            <div><label>Password:</label><input type='text' onChange={handlePasswordChange} placeholder="Password (case sensitive)"/></div>
            <button>Sign Up!</button>
        </form> */}
        {verify && <Redirect to="/welcome" />}
        </div>
    )
}
export default Signup