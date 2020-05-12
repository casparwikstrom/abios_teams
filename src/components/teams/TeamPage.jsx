import React, {useEffect, useState} from "react";
import {useParams} from 'react-router';
import Banner from "../Banner";
import {fetchRoster} from "../../api/teams/TeamFetch";
import {MyLoader} from "../MyLoader";
import Container from "@material-ui/core/Container";
import LabTabs from "./LabTabs";
import styled from "styled-components";
/*
import {useHistory} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import RosterTable from "./RosterTable";
import {resultsFetch} from "../../api/results/ResultsFetch";
import SimpleTable from "../results/ResultsTable";
*/


const TeamWrapper = styled.div`
    .makeStyles-root-9 {
        margin-top: 2% !important;
    }
`

function TeamPage() {
    /*const history = useHistory();
    const location = useLocation();*/
    const {id} = useParams();
    /*TODO*/
    /*const [error, setError] = useState(null);*/
    const [loading, setLoading] = useState(true);
    const [teamId, setID] = useState({id});
    const [team_info, setTeam] = useState([]);
    const [roster, setRoster] = useState({});
    const [past_matches, setPastMatches] = useState({});

    const [upcoming_matches, setMatches] = useState({});

    useEffect(() => {
        let team = fetchRoster(id);
        team.then(
            (result) => {
                setTeam(result.team_info);
                setID(id);
                setRoster(result.roster);
                setPastMatches(result.matches.past_matches);
                setMatches(result.matches.upcoming_matches);
                setLoading(false);
            })
    }, []);

    console.log("past_matches past_matches past_matches", past_matches)

    return (
        <div>
            {!loading && <Banner team_info={team_info} loading={loading}/>}
            {loading && <MyLoader/>}
            <TeamWrapper>
                {!loading && <Container fixed>
                    <LabTabs className="lab_tabs" roster={roster} past_matches={past_matches}
                             upcoming_matches={upcoming_matches}/>
                </Container>}
            </TeamWrapper>
        </div>

    );
}

export default TeamPage;
