import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { InvitationFlag } from "./InvitationFlag";

const StyledResultsRow = styled(TableRow)`
  border-top: 9px solid rgb(226, 230, 244) !important;
  text-decoration: none;
  &:hover {
    background-color: rgb(225, 229, 244);
  }
  td {
    text-decoration: none !important;
  }
  .team {
    display: flex;
    align-items: center;
  }
  .team_name {
    padding-left: 10px;
    color: rgb(15, 15, 15);
    text-decoration: none;
    &:hover {
      color: rgb(143, 148, 252);
    }
  }
`;

export default function ResultsRow(props) {
  return (
    <StyledResultsRow data-testid="id" key={props.id}>
      <TableCell data-testid="rank-cell" align={"center"} scope="row">
        {props.rank}
      </TableCell>
      <TableCell borderradius={16} align="center">
        <a className="team" href={"/team/" + props.id}>
          <div data-testid="logo">
            <img src={props.logo} alt="" align={"left"} />
          </div>
          <div data-testid="name" className="team_name" align={"left"}>
            {props.name}
          </div>
        </a>
      </TableCell>
      <TableCell data-testid={"status"} align="right">
        <InvitationFlag data-testid={"status"} status={props.status} />
      </TableCell>
      <TableCell data-testid="dcp" align="right">
        {props.dcp}
      </TableCell>
    </StyledResultsRow>
  );
}

ResultsRow.prototype = {
  id: PropTypes.number,
  rank: PropTypes.number,
  logo: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  dcp: PropTypes.number,
};
