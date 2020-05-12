import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
/*import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";*/


const NavbarStyle = styled.div`
    .navbar{
        position: fixed;
        z-index: 5;
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
        a{
            color: white;
            text-decoration: none;
        }
    }
`

function MainNavbar() {
    return (
        <NavbarStyle>
            <div className="navbar">
                <a href="/">Standings</a>
            </div>
        </NavbarStyle>
    );
}

export default MainNavbar;
