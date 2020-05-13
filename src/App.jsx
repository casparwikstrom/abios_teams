import React from "react";
import "./App.css";
import "react-virtualized/styles.css"; // only needs to be imported once
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import { ResultsPage } from "./components/results/ResultsPage";
import TeamPage from "./components/teams/TeamPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <MainNavbar />
        <Switch>
          <Route path="/team/:id" component={TeamPage} />
          <Route path="/">
            <ResultsPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
