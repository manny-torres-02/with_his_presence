import * as React from 'react'

import Navbar from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import '../styling/form.css'

function Login() {
    return (
        <div>
            <Navbar />
            <div className=' form-container align-middle'>
            <form id="first_name">
                <div class="form-group">

                <input id="floating_email" type="text" placeholder="email" class="form-control input-lg" />
                    <label for="floating_email">Email</label>
                   
                    <label>Password</label>
                    <input type="text" placeholder='Password' class="form-control input-lg" />
                    <button className="primary"> Sign in</button>
                    {/* ROUTING FOR THE FORGOT PASSWORD  
                    SCREEN as well... */}
                    <a> forgot password </a>
                </div>
            </form>
                 </div>

        </div>
    )
}

export default Login;
