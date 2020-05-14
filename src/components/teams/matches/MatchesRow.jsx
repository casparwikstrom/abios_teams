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
    width: 20% !important;
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
  .team {
    display: flex;
    align-items: center;
  }
  .team_name {
    width: 120px !important;
    padding-left: 10px;
    color: rgb(15, 15, 15);
    text-decoration: none;
    &:hover {
      color: rgb(143, 148, 252);
    }
`;

function removeTime(time) {
  return time.split(" ")[0];
}

export default function MatchesRow(props) {
  const matchResult = calcWin(props.team_score, props.opponent_score);
  return (
    <StyledMatchesRow key={props.team_id}>
      {!props.upcoming && (
        <StyledMatchesCell
          className="team"
          align="center"
          component="th"
          scope="row"
          data-testid="team_score"
        >
          <WinLossFlag
            status={calcWin(props.team_score, props.opponent_score)}
          />
        </StyledMatchesCell>
      )}
      <TableCell align="center">Vs</TableCell>
      <StyledMatchesCell align="center" className="opponent">
        <a className="team" href={"/team/" + props.opponent_id}>
          <div>
            <img
              data-testid="opponent-logo"
              src={props.opponent_logo}
              alt=""
              align={"left"}
            />
          </div>
          <div data-testid="opponent-name" className="team_name" align={"left"}>
            {props.opponent_name}
          </div>
        </a>
      </StyledMatchesCell>
      <TableCell data-testid="date" align={props.upcoming ? "center" : "right"}>
        {removeTime(props.date)}
      </TableCell>
      {!props.upcoming && (
        <StyledMatchesCell data-testid="score" className="score" align="center">
          <div className="winner">
            <div
              data-testid="team-score"
              style={{ fontWeight: matchResult === "WIN" ? "bold" : "" }}
            >
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
  team_id: PropTypes.number,
  opponent_id: PropTypes.number,
  team_score: PropTypes.number,
  opponent_logo: PropTypes.string,
  opponent_name: PropTypes.string,
  opponent_score: PropTypes.number,
};
