import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import styled from "styled-components";
import { convertRole } from "./RoleUtil";
import Proptypes from "prop-types";

const StyledCell = styled(TableCell)`
  width: 20% !important;
  img {
    height: 40px;
    width: 40px;
    border-radius: 30px;
    border: 1px solid rgba(224, 224, 224, 1);
    box-shadow: 3px 3px 4px rgba(224, 224, 224, 1);
  }
  .avatar {
    height: 55px !important;
    width: 55px !important;
  }
`;

const StyledRosterRow = styled(TableRow)`
  text-decoration: none;
  border-top: 9px solid rgb(226, 230, 244) !important;
  text-decoration: none;
  &:hover {
    background-color: rgb(225, 229, 244);
  }
`;

export default function RosterRow(props) {
  return (
    <StyledRosterRow key={props.id}>
      <StyledCell component="th" scope="row" className="avatar" align="center">
        <img className="avatar" src={props.images.default} alt="" />
      </StyledCell>

      <StyledCell align="left">{props.nick_name}</StyledCell>

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
    </StyledRosterRow>
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
