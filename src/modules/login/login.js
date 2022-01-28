import React from "react";
import { Column, Row } from "simple-flexbox";
import CustomInput from "../../common/components/CustomInput";
import styled from "styled-components";

const MainComponent = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100%;
  background: #f0f0f6 0% 0% no-repeat padding-box;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 236px 0px 446px 0px;
`;

const LoginComponent = styled.div`
  width: 541px;
  height: 100vh;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 12px #0000000d;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loginheading = styled.div``;
const SignFont = styled.div`
  text-align: center;
  font: normal normal 600 18px/22px Barlow;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;
const Button = styled.button`
  width: 482px;
  height: 38px;
  background: #6874e8 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
  text-align: center;
  font: normal normal medium 16px/19px Barlow;
  letter-spacing: 0px;
  color: #ffffff;
  margin: 20px 0px 11px 0px;
  border: none;
`;
const ForgotFont = styled.div`
  text-align: right;
  font: normal normal medium 12px/14px Barlow;
  letter-spacing: 0px;
  color: #6874e8;
  opacity: 1;
`;
const Icon = styled.img`
  width: 300px;
  height: 100px;
  margin: 0px 0px 32px 0px;
`;

const IconButton = styled.div``

function LoginForm(props) {
  let { state, onChangeEvent, onLoginClicked } = props;
  return (
    <MainComponent>
      <LoginComponent>
        <Loginheading>Login to<Icon src="/images/materiallibrarylogo.png" className=""></Icon></Loginheading>
        <IconButton><img width="20px" src="/images/google.jpg" />Sign in with Google</IconButton>
        <Column>
          <form onSubmit={onLoginClicked}>
            <SignFont>One Stop Solution For Construction World</SignFont>
            <CustomInput
              id="email"
              type="text"
              placeholder="Email"
              value={state ? state.email : ""}
              onChange={onChangeEvent}
              error={state ? state.emailError : ""}
              className="input-box"
            />
            <CustomInput
              id="password"
              placeholder="Passoword"
              type={state && state.isPasswordVisible ? "text" : "password"}
              value={state ? state.password : ""}
              onChange={onChangeEvent}
              error={state ? state.passwordError : ""}
              className="input-box"
            />
            <Button type="submit">Sign in</Button>
            <ForgotFont>Forgot Password?</ForgotFont>
          </form>
        </Column>
      </LoginComponent>
    </MainComponent>
  );
}

export default LoginForm;
