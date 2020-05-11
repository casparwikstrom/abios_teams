import React, {useEffect, useState} from "react";
import {useParams} from 'react-router';
import Banner from "../Banner";
import {fetchRoster} from "../../api/teams/TeamFetch";
import {MyLoader} from "../MyLoader";
import Container from "@material-ui/core/Container";
import LabTabs from "./LabTabs";
/*
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import RosterTable from "./RosterTable";
import {resultsFetch} from "../../api/results/ResultsFetch";
import SimpleTable from "../results/ResultsTable";
*/

function TeamPage() {
    /*const history = useHistory();
    const location = useLocation();*/
    const {id} = useParams();
    /*TODO*/
    /*const [error, setError] = useState(null);*/
    const [loading, setLoading] = useState(true);
    const [teamId, setID] = useState({id});
    const [team, setTeam] = useState([]);
    const [roster, setRoster] = useState({});
    const [matches, setMatches] = useState({});

    useEffect(() => {
        let team = fetchRoster(id);
        team.then(
            (result) => {
                setTeam(result);
                setID(id);
                setRoster(result.roster);
                setMatches(result.matches);
                setLoading(false);
            })
    }, []);

    return (
        <div>
            <Banner/>
            {loading && <MyLoader/>}
            {!loading && <Container fixed>
                <LabTabs roster={roster} matches={matches}/>
            </Container>}
        </div>

    );
}

export default TeamPage;
