import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-virtualized/styles.css'; // only needs to be imported once
import {BrowserRouter as Router} from 'react-router-dom';
import style from 'bootstrap/dist/css/bootstrap.css';
import {Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
