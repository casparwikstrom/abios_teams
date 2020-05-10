import React from 'react';
import './App.css';
import MyTable from "./components/MyTable";
import Banner from "./components/Banner";
import 'react-virtualized/styles.css'; // only needs to be imported once
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import MainNavbar from "./components/MainNavbar";
import Home from "./components/Home";
import Team from "./components/Team";

function App() {
    return (
        <div className="App">
            <MainNavbar/>
            <Router>
                <Switch>
                    <Route path='/team/:id' component={Team}>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
