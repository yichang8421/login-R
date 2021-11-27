import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {connect} from "react-redux";
import {BorderColor, InputBorder, InputH, InputW} from "../../constents";
import {registPassword, registUsername} from "../../store/actions";
import {State} from "store/types";

const SubBtn = styled.div`
    width: ${InputW};
    button{
      width: 100%;
      line-height: ${InputH};
      border-radius: ${InputBorder};
      border:1px solid ${BorderColor};
      transition: all 1s ease;
      &:hover{
        background: #10b5c6;
        color: #132a43;
      }
    }
`;

const Icon = styled.div`
  border:1px solid red;
  width:1.5em;
  line-height: 1.5em;
`;

const Input = styled.label`
  line-height: ${InputH};
  width: 70%;
  //border: 1px solid red;
  display: flex;
  //flex-direction: row;
  justify-content: center;

  > input{
    flex: 1;
    border:1px solid gray;
    min-width: 0;   // 必须加，否则 flex:1; 失效
    padding-left: 0.5em;
    padding-right: 0.5em;
    border-radius: ${InputBorder};
  }
`;

type Props = {
    title: string,
    username: string,
    password: string,
    addUsername: (state: { username: string }) => void,
    addPassword: (state: { password: string }) => void
};

class InputForm extends Component<Props> {
    render() {
        const {title, username, password, addUsername, addPassword} = this.props;
        return (
            <>
                <Input>
                    <Icon></Icon>
                    <input onChange={(e) => {
                        // store.dispatch(registUsername({username: e.target.value}));
                        addUsername({username: e.target.value});
                    }} type="text" placeholder="用户名"/>
                </Input>
                <Input>
                    <Icon></Icon>
                    <input onChange={(e) => {
                        // store.dispatch(registPassword({password: e.target.value}));
                        addPassword({password: e.target.value});
                    }} type="password"
                           placeholder="密码"/>
                </Input>
                <SubBtn>
                    <NavLink to={title === "登陆" ? "/login" : title === "注册" ? "/login" : "/"}>
                        <button type="submit"
                                onClick={() => console.log(`usrename:${username}\npassword:${password}`)}>{title}</button>
                    </NavLink>
                </SubBtn>
            </>
        );
    }
}

export default connect(
    (state: State): State => ({...state}),
    {
        addUsername: registUsername,
        addPassword: registPassword
    }
)(InputForm);