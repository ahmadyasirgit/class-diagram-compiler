
// import { response } from "express";
import React, {useRef} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Authenticate} from "../../api/api"


export default function Login() {


    let navigate = useNavigate()
    const email= useRef();
    const password= useRef();

        const loginUser = async()=>{
            let response = await Authenticate(email.current.value, password.current.value);
            console.clear()

            if (response.valid == true)
            {
                navigate("/dashboard")
            }
            else
            {
                alert("Invalid Credentials!")
            }
            
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
            <h3 className="fw-bold">Welcome to Application!</h3>
            <h5 className="mb-5 text-secondary">Login to your account</h5>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input ref={email} type="email" className="form-control rounded" id="exampleInputEmail1"
                    aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-1">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input ref={password} type="password" className="form-control rounded" id="exampleInputPassword1" />
            </div>
            <div id="emailHelp" className="form-text mb-4">Create an account? <Link to="/signup">Signup</Link></div>
            <div className="text-center">
                <button className="btn btn-primary" onClick={loginUser}>Login</button>
            </div>
        </div>
    </div>
</div>
  )
}
