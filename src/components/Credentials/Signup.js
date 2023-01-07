
import React, { useRef } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import {Register} from "../../api/api"

export default function Signup() {

    // const cookie = new Cookies();
    const email= useRef();
    const password= useRef();
    const repassword= useRef();
    const[message, setMessage]= useState("hidden");

        const signupUser = async()=>{
            if (password.current.value === repassword.current.value && password.current.value.length > 0)
            {
                if (validateEmail(email.current.value))
                {

                    let response = await Register(email.current.value, password.current.value);
                    if(response == 404)
                    {
                        alert("Invalid Error")

                    }
                    else{
                        alert("You are registered")
                    }
                }

                else
                {
                    alert("Invalid Email Address")
                }
            }
            else
            {
                alert("Password does not matches")
            }
            console.clear()

            
    }

    const validateEmail = (email) => {

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }




    return (
    <div className="d-flex">
        <div className="">
            <img alt="Pattern"
                src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="w-full overflow-hidden vh-100" />
        </div>
            <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 p-5">
            
                <div className="border border-1 p-5 rounded">
                    <h3 className="fw-bold">Your Class Diagram Compiler!</h3>
                    <h5 className="mb-3 mt-3 text-center text-secondary">Create an Account</h5>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control rounded" id="email" ref={email}
                            aria-describedby="emailHelp" />                    
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control rounded" id="password" ref={password} />
                    </div>
                    <div className="mb-1">
                        <label for="repassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control rounded" id="repassword" ref={repassword} />
                    </div>
                    <div id="emailHelp" className="form-text mb-4">Already have an account? <Link to="/login">Login</Link></div>
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={signupUser}>Create Account</button>
                    </div>
                </div>
            </div>
    </div>
  )
}
