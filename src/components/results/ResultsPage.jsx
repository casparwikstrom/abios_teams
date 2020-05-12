import React, {useEffect, useState} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {useLocation} from 'react-router-dom';
import SimpleTable from "./ResultsTable";
import Container from '@material-ui/core/Container';
import {resultsFetch} from "../../api/results/ResultsFetch";
import {MyLoader} from "../MyLoader";
import Banner from "../Banner";


function ResultsPage() {
    const location = useLocation();
    const [teams, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let newData = resultsFetch();
        newData.then((result) => {
            setData(result);
            setLoading(false);
        })
    }, []);

    return (
        <div>
            <Banner/>
            {loading && <MyLoader/>}
            {!loading && <Container fixed>
                <SimpleTable teams={teams}/>
            </Container>}
        </div>
    );
}


export default ResultsPage;