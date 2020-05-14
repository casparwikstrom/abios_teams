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
  }
`;

export default function ResultsRow(props) {
  return (
    <StyledResultsRow key={props.id} component="a" href={"/team/" + props.id}>
      <TableCell align={"center"} scope="row">
        {props.rank}
      </TableCell>
      <TableCell borderRadius={16} align="center">
        <div className="team">
          <div>
            <img src={props.logo} alt="" align={"left"} />
          </div>
          <div className="team_name" align={"left"}>
            {props.name}
          </div>
        </div>
      </TableCell>
      <TableCell align="right">
        <InvitationFlag status={props.status} />
      </TableCell>
      <TableCell align="right">{props.dcp}</TableCell>
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
