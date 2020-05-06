import React, {useEffect, useState} from 'react'
import {getUserFoodLog, getDeleteLog, getUpdateLog} from '../services/api-helper'
import CreateNewLog from './CreateNewLog'
import IndividualLog from './IndividualLog'
import {Link} from 'react-router-dom'
import '../css/MyLog.sass'


function MyLog(props){
    const [foodlog, setFoodlog] = useState([])
    const [showForm, setShowForm] = useState(false)


    useEffect(()=>{
        const revealFoodLogs = async() => {
            const res = await getUserFoodLog(props.userInfo.token)
            console.log(res)
            setFoodlog(res.data)
    }
        revealFoodLogs()
    },[])

    const revealFoodLogs = async() => {
        const res = await getUserFoodLog(props.userInfo.token)
        console.log(res)
        setFoodlog(res.data)
    }
  
    const sortedFoodLog = foodlog.sort((a, b) => b.date - a.date)
    console.log("sortedlog", sortedFoodLog)

    let groupBy = sortedFoodLog.reduce((r, a) => {
          // If an array already present for key, push it to the array. Else create an array and push the object
          r[a.date] = [...r[a.date] || [], a];
          // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
          return r;
        },{});
        

    const renderFoodlog = Object.entries(groupBy).map(([key, value], index)=>{
            let results = value.map((log, index)=>{
                return(
                <>
                    <IndividualLog userInfo={props.userInfo} log={log} revealFoodLogs={revealFoodLogs}/>
                    
                </>
                )
            })
            return(
                <>
                <ul className="collection">
                    <h5>{key}</h5>
                    {results}
                    <hr/>
                </ul>
                </>
            )
        
    })
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
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <h1>My Food Logs</h1>
            <button onClick={()=>setShowForm(!showForm)}>Add New Food Log</button>
            {showForm &&
                <CreateNewLog userInfo={props.userInfo} setShowForm={setShowForm} revealFoodLogs={revealFoodLogs} />
            }
            <div className="allLogs">{renderFoodlog}</div>
        </>
    )
}
export default MyLog