import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import {CalcWin, WinLossFlag} from "./Convertions";
import styled from 'styled-components';
import {ConvertStatus} from "../teams/Convertions";

const StyledmatchesRow = styled(TableRow)`
  border-bottom: 9px solid rgb(226, 230, 244) !important;
  &:hover {
    background-color: rgb(225, 229, 244);
  }
`;


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
        <StyledmatchesRow key={match.id}>
            {!is_upcoming &&(
                <TableCell align="center" component="th" scope="row">
                    {WinLossFlag(CalcWin(match.team_score, match.opponent_score))}
                </TableCell>
            )}
            <TableCell align="center">Vs</TableCell>
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
        </StyledmatchesRow>
    );
}

