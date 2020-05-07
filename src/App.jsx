import React from 'react';
import './App.css';
import MyTable from "./components/Table";
import ReactDOM from 'react-dom';
import {Table} from 'react-virtualized';
import Banner from "./components/Banner";
import 'react-virtualized/styles.css'; // only needs to be imported once
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import MainNavbar from "./components/MainNavbar";

function App() {
  return (
    <div className="App">
        <MainNavbar></MainNavbar>,
        <Banner></Banner>
        <div className="container">
            <Router>
                <Link to='/team/'></Link>
                <Switch>
                    <Route path='/team/:id'>
                        <h1>this is team</h1>
                    </Route>
                    <Route path="/">
                        <Table/>
                    </Route>
                </Switch>
            </Router>
        </div>
    </div>
  );
}

export default App;
