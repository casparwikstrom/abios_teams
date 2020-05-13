import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
/*import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";*/


const NavbarStyle = styled.div`
    .navbar{
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
        width: 100%;
        background: #262730;
        border-bottom: 1px solid #21222b;
        height: 50px;
        /* color: white; */
        justify-content: space-evenly;
        align-items: center;
        z-index:5;
        a{
            color: white;
            text-decoration: none;
        }
        .link {
            width: 70%;
            float: left;
            display: flex;
        }
    }
`

function MainNavbar() {
    return (
        <NavbarStyle>
            <div className="navbar">
                <div className="logo">
                    <img src="https://img.abiosgaming.com/other/Abios-Logo-with-white-text.png" alt=""/>
                </div>
                <div className="link">
                    <a href="/">Standings</a>
                </div>
            </div>
        </NavbarStyle>
    );
}

export default MainNavbar;
