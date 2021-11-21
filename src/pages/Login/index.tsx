import React, {Component} from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import InputForm from "../../components/InputForm";
import {BackG, BorderColor, FormWraper, InputW, StartFormTitle} from "../../constents";

const SignInBtns = styled.div`
  width:${InputW};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  button {
    background: none;
    border: none;
    font-size: 0.8em;
    &:active{
      color:${BorderColor};
      font-weight: bold;
    }
  }
`;

export default class Login extends Component<any, any> {
    render() {
        return (
            <BackG>
                <FormWraper>
                    <StartFormTitle>欢迎</StartFormTitle>
                    <InputForm title={"登陆"}/>
                    <SignInBtns>
                        <NavLink to={"/register"}><button>注册账号</button></NavLink>
                        <button>忘记密码</button>
                    </SignInBtns>
                </FormWraper>
            </BackG>
        );
    }
}