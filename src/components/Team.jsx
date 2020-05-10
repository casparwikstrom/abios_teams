import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router';
import {fetchRoster} from "../api/DataFetch";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {useLocation} from 'react-router-dom';


function Team() {
    const history = useHistory();
    const location = useLocation();
    const {id} = useParams();
    const [team, setTeam] = useState([]);
    const [teamId, setID] = useState({id});
    const [loading, setLoading] = useState(true);
    console.log("ididid", teamId)

    useEffect(() => {
        let team = fetchRoster(teamId);

        console.log("matchId", teamId)
        team.then((result) => {
            setTeam(result);
            setLoading(false);
        })
    }, []);


   /* /!*setMatch(match.find( ({ id }) => id === id ))*!/
    console.log("match after",team)


    /!*function cleanData(match) {
        const specificMatch = match.find( ({ id }) => id === id );
        specificMatch.then = {
        }
        console.log("specificMatch", specificMatch)
        return specificMatch;
    }
*!/
    useEffect(() => {
        const currentPath = location.pathname;
        const searchParams = new URLSearchParams(location.search);
    }, [location]);

    if (loading == true) {
        return (
            <MyLoader></MyLoader>
        );
    }*!/*/
    return (
        <p>Team</p>
    );
}

export default Team;