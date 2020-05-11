import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Container from "@material-ui/core/Container";
import LabTabs from "./LabTabs";


/*function toDate(epoch) {
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(epoch);
    console.log("date is", d)
    return d.toLocaleTimeString();
}*/

function calcWin(score, o_score) {
    if (score === o_score) {
        return "Tie";
    } else if (score > o_score) {
        return "Win"
    } else {
        return "Loss"
    }
}

/*TODO CONVERT SCORE FOR -1*/
/*function convertScore() {
    if

}*/

export default function MatchesRow(props) {
    console.log("propspropspropspropsprops", props)

    /*date: "2019-01-19 02:00:00"
    id: 182714
    opponent_id: 42819
    opponent_logo: "https://img.abiosgaming.com/competitors/thumbnails/EHOME.png"
    opponent_name: "EHOME"
    opponent_score: 1
    team_id: 33618
    team_name: "Virtus.pro"
    team_score: 2*/
    const past_match = props.match;

    console.log("past_match", past_match)


    /*{!loading && <Container fixed>
        <LabTabs roster={roster} matches={matches}/>
    </Container>}*/

    return (
        <TableRow key={past_match.id}>
            <TableCell component="th" scope="row">
                {calcWin(past_match.team_score, past_match.opponent_score)}
            </TableCell>
            <TableCell align="center">vs</TableCell>
            <TableCell align="center">
                <div>
                    <img src={past_match.opponent_logo} alt=""/>
                    <div>
                        {past_match.opponent_name}
                    </div>
                </div>
            </TableCell>
            <TableCell align="center">{past_match.date}</TableCell>
            <TableCell align="center">{past_match.team_score}/{past_match.opponent_score}</TableCell>
        </TableRow>
    );
}

