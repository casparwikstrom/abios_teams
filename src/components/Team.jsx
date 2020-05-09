import React, {useEffect, useState} from "react";



function Team() {
    /*const history = useHistory();
    const location = useLocation();*/
    /*const {id} = useParams();*/
    /*const [team, setTeam] = useState([]);
    const [teamId, setID] = useState({id});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        /!*let match = fetchMatch();*!/

        console.log("teamId", teamId)
        match.then((result) => {
            result.find( ({ id }) => id === teamId );
            setTeam(result);
            setLoading(false);
        })
    }, []);


    /!*setMatch(match.find( ({ id }) => id === id ))*!/
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
    }*/
    return (
        <p>Team</p>
    );
}

export default Team;