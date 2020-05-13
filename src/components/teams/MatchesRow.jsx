import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { calcWin, WinLossFlag } from "./WinLoss";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMatchesRow = styled(TableRow)`
  border-bottom: 9px solid rgb(226, 230, 244) !important;
  &:hover {
    background-color: rgb(225, 229, 244);
  }
`;

function removeTime(time) {
  var newtime = time;
  newtime = newtime.split(" ")[0];
  return newtime;
}

export default function MatchesRow(props) {
  return (
    <StyledMatchesRow key={props.id}>
      {!props.upcoming && (
        <TableCell align="center" component="th" scope="row">
          <WinLossFlag
            status={calcWin(props.team_score, props.opponent_score)}
          />
        </TableCell>
      )}
      <TableCell align="center">Vs</TableCell>
      <TableCell align="center">
        <div>
          <img src={props.opponent_logo} alt="" />
          <div>{props.opponent_name}</div>
        </div>
      </TableCell>
      <TableCell align="center">{removeTime(props.date)}</TableCell>
      {!props.upcoming && (
        <TableCell align="center">
          {props.team_score}/{props.opponent_score}
        </TableCell>
      )}
    </StyledMatchesRow>
  );
}

MatchesRow.prototype = {
  upcoming: PropTypes.bool,
  id: PropTypes.number,
  team_score: PropTypes.number,
  opponent_logo: PropTypes.string,
  opponent_name: PropTypes.string,
  opponent_score: PropTypes.number,
};
