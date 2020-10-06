import React, { Component } from "react";
import "./Header.css";
import logo from "../images/account_circle-black-18dp.svg"

class Header extends Component {

    render() {

        return (
            <div className="header">
                <h1>Contacts List</h1>
                <img className="logo" src={logo} alt="contacts"></img>
            </div>

        );

    };
}

export default Header;
