import React from 'react';
import './App.css';
import MyTable from "./components/MyTable";
import Banner from "./components/Banner";
import 'react-virtualized/styles.css'; // only needs to be imported once
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import MainNavbar from "./components/MainNavbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <MainNavbar/>,
        <div className="container">
            <Router>
                <Link to='/team/'/>
                <Switch>
                    <Route path='/team/:id'>
                        <h1>this is team</h1>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    </div>
  );
}

export default App;
