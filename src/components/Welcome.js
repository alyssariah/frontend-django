import React, {useState, useEffect} from 'react'
import {Redirect,Link} from 'react-router-dom'
import {getUserFoodLog, getDeleteLog} from '../services/api-helper'
import '../css/Welcome.sass'
import MyLog from './MyLog'

function Welcome(props){
    const [foodlog, setFoodlog] = useState([])
    const [showFood, setShowFood] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [rerender, setRerender] = useState(true)
   
    
    if(!props.userInfo){
        return <Redirect to='/'/>
    }
    

    return(
    <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
                <a class="navbar-brand" href="#">Nutrition Log</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link to='/welcome' class="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/mylog" class="nav-link" href="#">My Log</Link>
                    </li>
                    {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> */}
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <h1>Welcome {props.userInfo.username}!</h1>
            
        </>
    )
}

export default Welcome