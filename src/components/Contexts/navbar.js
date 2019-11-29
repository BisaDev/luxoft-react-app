import {LogStatusContext} from "./LogStatusContext";
import Logo from "../../assets/logo.png";
import React from "react";

export const NavBar = () => (
    <LogStatusContext.Consumer>
        {({status, toggleLogStatus}) => (
            <nav className="navbar navbar-expand-lg justify-content-between">
                <a className="navbar-brand" href="/">
                    <img src={Logo} height="50" alt=""/>
                </a>
                <a onClick={toggleLogStatus}
                   href="/" className={`logout-btn ${status ? "" : "hidden"}`}>
                    Log out
                </a>
            </nav>
        )}
    </LogStatusContext.Consumer>
);