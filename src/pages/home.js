import * as React from 'react'
import Navbar from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../styling/buttons.css';

function Home() {
    return (
        <div>
            <div className="container">
            <Navbar />
            <h1> With His Presence </h1>
            {/* 
            SET UP THE PROPER LINKS/ROUTING 
            */}
            
            <div className="row justify-content-center  "> 
            <div className='col-1'>

            <button type="button" className="btn btn-primary justify-content-center">Continue with Google</button>
            <button type="button" className="btn btn-primary align-items-center">Continue with Email</button>
            <button type="button" className="btn btn-primary align-items-center">Sign Up</button>
            <button type="button" className="btn btn-primary align-self-center">Guest</button>
            </div>
            </div>
                            
            </div>
        </div>
    )   
}

export default Home;
