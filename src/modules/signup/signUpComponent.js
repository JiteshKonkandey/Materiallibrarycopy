import React from 'react'
import {Column, Row} from "simple-flexbox";
import {Button} from "@material-ui/core";
import CustomInput from "../../common/components/CustomInput";
import {history} from "../../managers/history";
import Divider from "@material-ui/core/Divider/Divider";
import { Link } from 'react-router-dom';



function SignUpForm(props) {
    let {state, togglePassword, onChangeEvent, onLoginClicked} = props;
    const form ={
        // width: "100px",
        // display: "flex",
        // justify-content: "center",
    }
    return (
        <Column  >
                    
            <form onSubmit={onLoginClicked} style={form}>
                <img width= "220px" src="/images/materiallibrarylogo.png" alt="mlLogo" />

                <div className="socialmedia-signup">
                    <button className='w-365 socialmedia-button'><img width="25px" src="/images/google.jpg" alt="googleicon"/>SIGN UP WITH GOOGLE</button>
                    <button className='w-365 socialmedia-button'><img width="25px" src="/images/facebook.png" alt="facebookicon" />SIGN UP WITH FACEBOOK</button>
                </div>

                <div style={{}}>or</div>
                <div className="fs-15 mt-3 signup-inputs">Full Name</div>
                <CustomInput id="name" type="text" value={state ? state.name : ""} onChange={onChangeEvent}
                             error={state ? state.nameError : ""} className="fs-15 p-2 mt-1"/>

                <div className="fs-15 mt-2 signup-inputs ">Email Address</div>
                <CustomInput id="email" type="text" value={state ? state.email : ""} onChange={onChangeEvent}
                             error={state ? state.emailError : ""} className="fs-15 p-2 mt-1"/>

                <Row className="fs-15 mt-2 signup-inputs">Password</Row>
                <CustomInput id="password" type={"password"} value={state ? state.password : ""}
                             onChange={onChangeEvent} error={state ? state.passwordError : ""}
                             className="fs-15 p-2 mt-1"/>
                
                <div className="topping">
                    <input type="checkbox" id="topping" name="topping" value="Paneer" className='mr-2'/>Remember Me
                </div>
                

                <Row className="fs-15 mt-2 font-weight-bold">Confirm Password</Row>
                <CustomInput id="confirmPassword" type={"password"} value={state ? state.confirmPassword : ""}
                             onChange={onChangeEvent} error={state ? state.confirmPasswordError : ""}
                             className="fs-15 p-2 mt-1"/>

                <div className="topping">
                    <input type="checkbox" id="topping" name="topping" value="Paneer" className='mr-2'/>By Joining, You Agree The <Link >Terms Of Services</Link> And <Link>Privacy Policy</Link>
                </div>

                <Button type='submit' className="bg-blue outline-none text-transform-capitalize
                fc-white w-10 py-2 fs-17 mt-4 cursor-pointer">
                    SIGN UP
                </Button>
                <div>Already Have An Account ? <Link path="/sign-up">Login</Link></div>
            </form>
        </Column>
    );
}

function SignUpComponent(props) {
    let {state, togglePassword, onChangeEvent, onLoginClicked} = props;
    return (
        <Row className="align-items-center my-5" horizontal={'center'}>
            {SignUpForm(props)}
        </Row>
    );
}

function signUpComponent(props) {
    return (
        <Column horizontal={'center'} className="w-100 p-3 min-vh-100">
            {SignUpComponent(props)}
        </Column>
    );
}

export default signUpComponent;