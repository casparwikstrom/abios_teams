import React, {useEffect, useState} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import SimpleTable from "./MyTable";
import {MyLoader} from "./MyLoader";
import Banner from "./Banner";
import Team from "./Team";
import {dataFetch} from "../api/DataFetch";
import Container from '@material-ui/core/Container';

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
        return <MyLoader/>
    } else {
        return (
            <Container fixed>
                <SimpleTable teams={teams}/>
            </Container>
        );
    }
}


export default Home;