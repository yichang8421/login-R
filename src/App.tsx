import React, {Component} from "react";
import {Route, Routes} from "react-router-dom";
import Login from "pages/Login";
import Register from "./pages/Register";
import styled from "styled-components";
import Home from "./pages/Home";


class App extends Component<any, any> {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;