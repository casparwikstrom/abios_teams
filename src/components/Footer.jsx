import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
/*import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";*/


const FooterStyle = styled.div`
    .footer{
        z-index: 5;
        display: flex;
        top: 0;
        left: 0;
        width: 100%;
        background: #262730;
        border-bottom: 1px solid #21222b;
        height: 200px;
        /* color: white; */
        justify-content: space-evenly;
        align-items: center;
        a{
            color: white;
            text-decoration: none;
        }
        ul {
          list-style-type: none;
        }
        .left {
            text-decoration: none;
        }
        li{
        padding-top: 10px;
        padding-bottom: 10px;
        }
        .middle {
        
        }
        .right {
        
        }
        
    }
`

function Footer() {
    return (
        <FooterStyle>
            <div className="footer">
                <div className="left">
                    <ul>
                        <li><a href="/">Standings</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Widgets</a></li>
                    </ul>
                </div>
                <div className="middle">
                    <ul>
                        <li><a href="/">Documentation</a></li>
                        <li><a href="/">API Reference</a></li>
                        <li><a href="/">Open Source</a></li>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Jobs</a></li>
                    </ul>
                </div>

            </div>
        </FooterStyle>
    );
}

export default Footer;
