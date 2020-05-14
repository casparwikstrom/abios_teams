import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { calcWin, WinLossFlag } from "./WinLoss";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMatchesRow = styled(TableRow)`
  border-top: 9px solid rgb(226, 230, 244) !important;
  text-decoration: none;
  &:hover {
    background-color: rgb(225, 229, 244);
  }
`;

const StyledMatchesCell = styled(TableCell)`
  width: 10%;
  .opponent {
    width: 10%;
  }
  .score {
    display: flex;
    width: 20% !important;
  }
  .winner {
    display: flex;
    justify-content: center;
  }
  .dash {
    padding-left: 2px;
    padding-right: 2px;
  }
`;

function removeTime(time) {
  return time.split(" ")[0];
}

export default function MatchesRow(props) {
  const matchResult = calcWin(props.team_score, props.opponent_score);

  return (
    <StyledMatchesRow key={props.id}>
      {!props.upcoming && (
        <StyledMatchesCell
          className="team"
          align="center"
          component="th"
          scope="row"
        >
          <WinLossFlag
            status={calcWin(props.team_score, props.opponent_score)}
          />
        </StyledMatchesCell>
      )}
      <TableCell align="center">Vs</TableCell>
      <StyledMatchesCell align="center" className="opponent">
        <div>
          <div>
            <img src={props.opponent_logo} alt="" />
          </div>
          <div>{props.opponent_name}</div>
        </div>
      </StyledMatchesCell>
      <TableCell align={props.upcoming ? "center" : "right"}>
        {removeTime(props.date)}
      </TableCell>
      {!props.upcoming && (
        <StyledMatchesCell className="score" align="center">
          <div className="winner">
            <div style={{ fontWeight: matchResult === "WIN" ? "bold" : "" }}>
              {props.team_score}
            </div>
            <div className="dash">-</div>
            <div style={{ fontWeight: matchResult === "LOSS" ? "bold" : "" }}>
              {props.opponent_score}
            </div>
          </div>
        </StyledMatchesCell>
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
