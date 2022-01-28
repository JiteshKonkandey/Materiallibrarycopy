import React, { useState, useEffect } from "react";
import { Column, Row } from "simple-flexbox";
import LoginSlider from 'react-simple-image-slider'
// import CustomInput from "../../common/components/CustomInput";
import styled from "styled-components";

const MainComponent = styled.div`
  display: flex;
  justify-content: space-between;
  ${'' /* max-width: 1920px;
  width: 100%;
  height: 100%; */}
`;


const LoginPage = styled.div`
`;


// const loginimageslider = styled.div`
// `;

const loginimageslider = [
  { 
    id: 1,
    url: "sliderlogin/img1.jpg"
   },
  { 
    id: 2,
    url: "sliderlogin/img2.jpg" 
  },
  { 
    id: 3,
    url: "sliderlogin/img3.jpg" 
  }
];
function LoginForm(props) {
  let { state, onChangeEvent, onLoginClicked } = props;
  const initialValues = {username: "", email: "", password: ""};
  
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) => {
    const {name, value}= e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  },[formErrors])

  const validate = (values) => {
    const errors = {};
    const regex= /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if(!regex.test(values.email)) {
      errors.email = "Email is Invalid!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }else if (values.password.length < 4) {
      errors.password = "Password should be greater than Four characters";
    }else if (values.password.length > 10) {
      errors.password = "Password should not be greater than Ten characters";
    }
    return errors;
  };

  return (
    <>

    <div className="login-container">
    
    {/* {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='signedin'>Signed In</div>) : (
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
    )} */}
      <div className="login-form">

        <form className = "main-loginform" onSubmit={handleSubmit}>
          <h1>Login to <img className='logo' src="/images/materiallibrarylogo.png" alt="logo" width={220}/></h1>
          <p>One stop solution for Construction world</p>
          <div className="form-input">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder='Username' name='username' value={formValues.username} onChange={handleChange} />
          </div>
          <p>{formErrors.username}</p>

          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Email' name='email' value={formValues.email} onChange={handleChange}/>
          </div>

          <p>{formErrors.email}</p>

          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Password' name='password' value={formValues.password} onChange={handleChange}/>
          </div>
          <p>{formErrors.password}</p>

          <div className="form-remember-forgot">
            <span className='form-checkbox'><input className="checkbox" type="checkbox" name='checkbox'/><h4 className="remember">Remember me</h4></span>
            <h4 className='forgot'>Forgot Password</h4>
          </div>


          {/* <div className="loginforgot"><Link to="#">Forgot Password</Link></div> */}

          <button type='submit' className='loginbutton'>Submit</button>
          
        </form>
      </div>
      <div className="login-slider">
        <LoginSlider 
          width={720}
          height={720}
          images={loginimageslider}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={1}
          slideDuration={2}
        />
      </div>
    </div>
    </>
  );
}

export default LoginForm;
