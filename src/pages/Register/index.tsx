import React, {Component} from "react";
import {BackG, FormWraper, StartFormTitle} from "constents";
import InputForm from "../../components/InputForm";

export default class Register extends Component {
    render() {
        return (
            <BackG>
                <FormWraper>
                    <StartFormTitle>注册</StartFormTitle>
                    <InputForm title={"注册"}/>
                </FormWraper>
            </BackG>
        );
    }
}