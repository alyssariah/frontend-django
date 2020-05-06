import React, {useState} from 'react'
import {getUserFoodLog, getDeleteLog, getUpdateLog} from '../services/api-helper'

function IndividualLog(props){
    const [edit, showEdit] = useState(false)
    const [patch, setPatch] = useState("")
    const [myItem, setItem] = useState("")
    
    let deleteLog = async(id) =>{
        const res = await getDeleteLog(id, props.userInfo.token)
        console.log(res)
        props.revealFoodLogs()
    }
    const updateLog = async(e) =>{
        e.preventDefault()
        console.log('patch', patch)
        const res = await getUpdateLog(props.log.id, {meal: patch}, props.userInfo.token)
        console.log(res)
        showEdit(false)
        props.revealFoodLogs()
    }
    const handleEdit =(e)=>{
        setPatch(e.target.value)
    }
    return(
        <li>
            <div className="collection-item">
                <img className="logo" src="https://cdn.pixabay.com/photo/2017/05/15/21/56/apple-2316234_960_720.png"/>  
                <section>
                <span onClick={()=>{showEdit(true); setItem("meal")}} className="title">
                    {!edit? props.log.meal: <form onSubmit={updateLog}>
                        <input type="text" placeholder={props.log.meal} onChange={handleEdit}/><button>Submit</button>
                        </form>}
                </span>
                <p>{props.log.name_of_food}<br/>
                {props.log.calories}<br/>
                {props.log.description}<br/>
                </p>
                </section>
            </div>
            <button onClick={()=>deleteLog(props.log.id)}>delete</button>
        </li> 

    )
}
export default IndividualLog