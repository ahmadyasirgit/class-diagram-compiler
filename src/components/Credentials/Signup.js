
import React, { useRef } from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Register } from "../../api/api"

export default function Signup() {

    // const cookie = new Cookies();
    const email = useRef();
    const password = useRef();
    const repassword = useRef();

    const [message, setMessage] = useState("d-block");
    const [emailMessage, setEmailMessage] = useState("For example: example@gmail.com")
//    const [message2, setMessage2] = useState("d-block");

    
    const [messageState, setMessageState] = useState("d-block");
    const [passMessage, setPassMessage] = useState("Try using unique password.");

    const signupUser = async () => {
        if (email.current.value.length > 0) {
            if (validateEmail(email.current.value)) {
                if (validatePass(password.current.value, repassword.current.value)) {

                    let response = await Register(email.current.value, password.current.value);
                    // alert("response");
                    // alert(JSON.stringify(response))
                    if (response != 404) {
                        
                        alert("You are registered");
                        Navigate("/login");

                        //else
                        //alert("Invalid Error");
                        // setMessage2('d-none');
                        // setMessage('d-block');
                    }
                }
            }
        }
        else {
            // alert("Email can't be empty.")
            setEmailMessage("Email can't be empty.");
        }
    }
    
    const validatePass = (password, confirmPassword) => {
        // Check if the passwords match
        if (password !== confirmPassword) {
            setPassMessage("Password does not match. Try again!");
            return false;
        }

        // Check the length
        if (password.length < 8) {
            setPassMessage("Password length must be greater than 8.");
            return false;
        }

        // Check for lowercase letters
        const lowercaseRegex = /[a-z]/;
        if (!lowercaseRegex.test(password)) {
            setPassMessage("Password must have at least 1 LowerCase letter.");
            return false;
        }
        
        // Check for uppercase letters
        const uppercaseRegex = /[A-Z]/;
        if (!uppercaseRegex.test(password)) {
            setPassMessage("Password must have at least 1 UpperCase letter.");
            return false;
        }

        // Check for digits
        const digitRegex = /[0-9]/;
        if (!digitRegex.test(password)) {
            setPassMessage("Password must have at least 1 digit.");
            return false;
        }

        // Check for special characters
        const specialCharRegex = /[!@#\$%\^\&*\)\(+=._-]/;
        if (!specialCharRegex.test(password)) {
            setPassMessage("Password msut have at least 1 Special character.");
            return false;
        }
        return true;

    }

    const validateEmail = (email) => {
        // Check for whitespace
        // alert(email);
        if (/\s/.test(email)) {
            setEmailMessage("Email can't contain white spaces.");
            return false;
        }
        const specialCharRegex = /[!#$%^&*@()+|~=`{}\[\]:";'<>,._?\/]/;
        if (specialCharRegex.test(email[0])) {
            setEmailMessage("Email can't start with any special characters.");
            return false;
        }
        const CharRegex = /[!#$%^&*()+|~=`{}\[\]:";'<>,_?\/]/;
        if (CharRegex.test(email)) {
            setEmailMessage("Email can't contain special characters except '@' and '.'");
            return false;
        }

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setEmailMessage("Invalid Email format.");
        return re.test(String(email).toLowerCase());
        
        
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (!emailRegex.test(email)) {
            setEmailMessage("Invalid Email format.");
            return false;
        }

        return true;
    }

    const clearEmail = () => {
        setEmailMessage('For example: example@gmail.com');
        // setMessage2('d-block');
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
                        <label for="email" className="form-label"   >Email address</label>
                        <input type="email" onClick={clearEmail} className="form-control rounded" id="email" ref={email}
                            aria-describedby="emailHelp" />
                        {/* <div className={`mb-4 ${message}`}>
                            <div id="emailHelp" className="form-text mb-4">Email Already Exists! Try using different email.</div>
                        </div> */}
                        <div className={`mb-4 ${message}`}>
                            <div id="emailHelp" className="form-text mb-4">{emailMessage}</div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control rounded" id="password" ref={password} />
                        <div className={`mb-4 ${messageState}`}>
                            <div id="emailHelp" className="form-text mb-4">{passMessage}</div>
                        </div>
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
