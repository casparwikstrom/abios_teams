import React, {useEffect, useState} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import MyTable from "./MyTable";
import {MyLoader} from "./MyLoader";
import Banner from "./Banner";
import Team from "./Team";
import {dataFetch} from "../api/DataFetch";

function Home() {
    const location = useLocation();
    const [teams, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let newData = dataFetch();
        newData.then((result) => {
            setData(result);
            setLoading(false);
        })
    }, []);

    if (loading == true) {
        return <MyLoader></MyLoader>
    } else {
        return (
            <Switch>
                <Route path='/team/:id' component={Team}>
                    <h2>hello team</h2>
                </Route>
                <Route path="/">
                    <Banner/>
                    <MyTable teams={teams}/>
                </Route>
            </Switch>
        );
    }
}


export default Home;