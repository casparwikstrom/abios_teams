import React, {useEffect, useState} from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import {useLocation} from 'react-router-dom';
import SimpleTable from "./ResultsTable";
import Container from '@material-ui/core/Container';
import {resultsFetch} from "../../api/results/ResultsFetch";
import {MyLoader} from "../MyLoader";
import Banner from "../Banner";

const dota_image_url = "https://png2.cleanpng.com/sh/b86cc99e3e26672421eee2ab456bb458/L0KzQYm3WMA5N6h2fpH0aYP2gLBuTfRwfJIySp9tZXbofsTsTf9nNaVtfZ9qbnPsdbB7k71kd6ZzjNd7LYP3grryhb1odJCyiN5qeXX1g377hfFuNZdxjeo2NXK5cba5Wck6PGY9S6U3MUW1RYS6UcYyPWQ4T6U6NEi0RoGAVr5xdpg=/kisspng-dota-2-defense-of-the-ancients-counter-strike-glo-players-team-flux-5b6ae299945833.1525331615337314816076.png";

function ResultsPage() {
    const location = useLocation();
    const [teams, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    /*const [images, setImages] = useState(true);*/
    useEffect(() => {
        let newData = resultsFetch();
        newData.then((result) => {
            setData(result);
            setLoading(false);
        })
    }, []);

    return (
        <div>
            {!loading && <Banner title={"dota"} image_url={dota_image_url}/>}
            {loading && <MyLoader/>}
            {!loading && <Container fixed>
                <SimpleTable teams={teams}/>
            </Container>}
        </div>
    );
}


export default ResultsPage;