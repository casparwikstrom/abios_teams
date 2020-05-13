import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import styled from "styled-components";
import { convertRole } from "./RoleUtil";
import Proptypes from "prop-types";

const StyledCell = styled(TableCell)`
  width: 20% !important;
  background-color: rgb(253, 253, 253) !important;
  border-bottom: 5px solid rgba(226, 230, 244, 1) !important;
`;

const StyledRow = styled(TableRow)`
  background-color: rgb(253, 253, 253) !important;
  border-bottom: 5px solid rgba(226, 230, 244, 1) !important;
`;

export default function RosterRow(props) {
  return (
    <StyledRow key={props.id}>
      <StyledCell component="th" scope="row">
        {props.nick_name}
      </StyledCell>
      <TableCell align="left">
        <img src={props.images.default} alt="" />
      </TableCell>
      <TableCell align="center">
        {props.first_name} {props.last_name}
      </TableCell>
      <TableCell align="center">
        <div>
          <div>
            <img src={props.country.images.default} alt="" />
          </div>
          <div>{props.country.name}</div>
        </div>
      </TableCell>
      <TableCell align="center">
        {props.roles.map((role) => (
          <div key={role.name}>{convertRole(role.name)} </div>
        ))}
      </TableCell>
    </StyledRow>
  );
}

RosterRow.proptype = {
  nick_name: Proptypes.string,
  images: Proptypes.object,
  first_name: Proptypes.string,
  last_name: Proptypes.string,
  country: Proptypes.object,
  roles: Proptypes.array,
};
