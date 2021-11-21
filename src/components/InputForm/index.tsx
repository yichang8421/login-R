import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {BorderColor, InputBorder, InputH, InputW} from "../../constents";

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
    title: string
}

export default class InputForm extends Component<any, Props> {
    render() {
        const {title} = this.props;
        return (
            <>
                <Input>
                    <Icon></Icon>
                    <input type="text" placeholder="用户名"/>
                </Input>
                <Input>
                    <Icon></Icon>
                    <input type="password" placeholder="密码"/>
                </Input>
                <SubBtn>
                    <NavLink to={title === "登陆" ? "/" : title === "注册" ? "/login" : "/"}><button
                        type="submit">{title}</button></NavLink>
                </SubBtn>
            </>
        );
    }
}