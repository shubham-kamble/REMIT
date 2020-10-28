import React from 'react'
import { Button } from '../../Button'
import './SignUp.css'

function SignUp() {
    return (
        <div>
            <div className="signup-container">
                <div className="signup_card">
                    <h1>Create Account Here</h1>
                    <input type="text" placeholder='Email' className='inputfield'/>
                    <input type="text" placeholder='Username' className='inputfield'/>
                    <input type="password" placeholder='Password' className='inputfield'/>
                    <input type="password" placeholder='ConfirmPassword' className='inputfield'/>
                    <select name="country" id="country"  className='inputfield'>
                        <option value="" disabled selected>Country</option>
                        <option value="Australia">Australia</option>
                        <option value="France">France</option>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                    </select>
                    <Button buttonStyle='btn-outline' buttonSize='btn-mobile' buttonColor='green'>Sign Up</Button>
                </div>
            </div>
        </div>
    )
}

export default SignUp
