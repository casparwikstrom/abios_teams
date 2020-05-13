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
  img {
    height: 40px !important;
    width: 40px;
    border-radius: 30px;
  }
`;

const StyledRow = styled(TableRow)`
  text-decoration: none;
  background-color: rgb(253, 253, 253) !important;
  border-bottom: 5px solid rgba(226, 230, 244, 1) !important;
`;

export default function RosterRow(props) {
  return (
    <StyledRow key={props.id}>
      <StyledCell component="th" scope="row">
        {props.nick_name}
      </StyledCell>
      <StyledCell align="left">
        <img src={props.images.default} alt="" />
      </StyledCell>
      <TableCell align="center">
        {props.first_name} {props.last_name}
      </TableCell>
      <StyledCell align="center">
        <div>
          <div>
            <img src={props.country.images.default} alt="" />
          </div>
          <div>{props.country.name}</div>
        </div>
      </StyledCell>
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
