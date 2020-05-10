import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router';
import {useLocation} from 'react-router-dom';
import Banner from "../Banner";
import {fetchRoster} from "../../api/teams/TeamFetch";


function TeamPage() {
    const history = useHistory();
    const location = useLocation();
    const {id} = useParams();
    const [team, setTeam] = useState([]);
    const [teamId, setID] = useState({id});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log("ididid", teamId)

    useEffect(() => {
        let team = fetchRoster(id);
        team.then(
            (result) => {
                setTeam(result);
            },
            (error) => {
                setLoading(false);
                setError(error);
            })
    }, []);


    return (
        <div className="Wrapper">
            <Banner/>
        </div>
    );
}

export default TeamPage;