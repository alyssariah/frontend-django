import React from 'react'
import {Link} from 'react-router-dom'

function Home(){
    return(
        <div className="background">
            <div className="Home">
                <img className="logo" src="https://cdn.pixabay.com/photo/2017/05/15/21/56/apple-2316234_960_720.png"/>
                <h3>Welcome to Nutrition Log!</h3>
                <p>A place to log all your meals</p>
                <Link to='/login'><button type="button" class="btn primary btn-lg">Log in</button></Link>
                <Link to='/signup'><button type="button" class="btn secondary btn-lg">Sign up</button></Link>     
            </div>
        </div>
    )
}
export default Home