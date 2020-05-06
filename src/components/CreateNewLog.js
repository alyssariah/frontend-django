import React, {useState, useEffect} from 'react'
import {getUserFoodLog, makeNewLog} from '../services/api-helper'

function CreateNewLog(props){
    const [createLog, setCreateLog] = useState({
        "name_of_food": '',
        "day_of_the_week": 'Monday',
        "meal": 'Breakfast',
        "description": '',
        "calories": '',
        "is_public": false
      })
    const [statusPublic, setStatusPublic] = useState(false)

    
      const handleFood = (e)=>{
        let newFood = {...createLog}
        newFood.name_of_food = e.target.value
        setCreateLog(newFood)
    }
    const handleDay = (e)=>{
        let newFood = {...createLog}
        newFood.day_of_the_week = e.target.value
        setCreateLog(newFood)
    }
    const handleMeal= (e)=>{
        let newFood = {...createLog}
        console.log(e.target.value)
        newFood.meal = e.target.value
        setCreateLog(newFood)
    }
    const handleDes = (e)=>{
        let newFood = {...createLog}
        newFood.description = e.target.value
        setCreateLog(newFood)
    }
    const handleCal = (e)=>{
        let newFood = {...createLog}
        newFood.calories = e.target.value
        setCreateLog(newFood)
    }
    const handlePub = (e)=>{
        let newFood = {...createLog}
        newFood.is_public = !createLog.is_public
        setCreateLog(newFood)
    }
    const create = async(e)=>{
        console.log(createLog)
        e.preventDefault()
        const res = await makeNewLog(createLog, props.userInfo.token)
        console.log("made it", res)
        props.revealFoodLogs()
        props.setShowForm(false)
    }
    return(
        <div className="background">
        <form onSubmit={create}>
            <div class="form-group">
                <label for="exampleFormControlInput1">Food Item:</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ex. Pizza, Pancakes, Salad, Pasta" onChange={handleFood} required='required'/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Day of the Week:</label>
                <select class="form-control" id="exampleFormControlSelect1" onChange={handleDay} required='required'>
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Meal:</label>
                <select class="form-control" id="exampleFormControlSelect1" onChange={handleMeal} required='required'>
                    <option>Breakfast</option>
                    <option>Lunch</option>
                    <option>Dinner</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Description:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleDes}></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Calories:</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={handleCal} required='required'/>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" onChange={handlePub}/>
                <label class="form-check-label" for="defaultCheck1">
                Is Public
                </label>
            </div>
            <button>Submit</button>
        </form>
        </div>
        // <form onSubmit={create}>
        //     <div><label>Food Item:</label><input type='text'onChange={handleFood}/></div>
        //     <div><label>Day of the week:</label><input type='text'onChange={handleDay}/></div>
        //     <div><label>Meal:</label><input type='text'onChange={handleMeal}/></div>
        //     <div><label>Description</label><input type='text' onChange={handleDes}/></div>
        //     <div><label>Calories:</label><input type='text' onChange={handleCal}/></div>
        //     <div><label>is_public:</label><input type='text'/></div>
        //     <button>Submit</button>
        // </form>
    )
}
export default CreateNewLog