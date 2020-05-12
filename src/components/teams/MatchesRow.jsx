import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import styled from "styled-components";
import {CalcWin, WinLossFlag} from "./Convertions";
import {func} from "prop-types";

/*function toDate(epoch) {
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(epoch);
    console.log("date is", d)
    return d.toLocaleTimeString();
}*/

/*TODO CONVERT SCORE FOR -1*/
/*function convertScore() {
    if

}*/

function removeTime(time) {
    console.log("time", time)
    var newtime = time;
    newtime = newtime.split(' ')[0];
    return newtime;
}

export default function MatchesRow(props) {
    const match = props.match.match;
    const is_upcoming = props.match.upcoming;
    console.log("is_upcoming", is_upcoming)
    console.log("propspropspropspropsprops", props.match.upcoming)

    return (
        <TableRow key={match.id}>
            {!is_upcoming &&(
                <TableCell align="center" component="th" scope="row">
                    {WinLossFlag(CalcWin(match.team_score, match.opponent_score))}
                </TableCell>
            )}
            <TableCell align="center">vs</TableCell>
            <TableCell align="center">
                <div>
                    <img src={match.opponent_logo} alt=""/>
                    <div>
                        {match.opponent_name}
                    </div>
                </div>
            </TableCell>
            <TableCell align="center">{removeTime(match.date)}</TableCell>
            {!is_upcoming && (<TableCell align="center">{match.team_score}/{match.opponent_score}</TableCell>)}
        </TableRow>
    );
}
