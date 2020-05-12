import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import styled from 'styled-components';
import {ConvertStatus} from "../teams/Convertions";

const StyledResultsRow = styled(TableRow)`
  border-bottom: 9px solid rgb(226, 230, 244) !important;
  &:hover {
    background-color: rgb(225, 229, 244);
  }
`;


/*display: flex;
justify-content: space-evenly;
align-items: center;*/
export default function ResultsRow(props) {
    return (
        <StyledResultsRow key={props.team.id} component="a" href={"/team/" + props.team.id}>
            <TableCell scope="row">
                {props.team.rank}
            </TableCell>
            <TableCell borderRadius={16} align="center">
                <div>
                    <img src={props.team.logo} alt=""/>{props.team.name}
                </div>
            </TableCell>
            <TableCell align="center">{ConvertStatus(props.team.status)}</TableCell>
            <TableCell align="center">{props.team.dcp}</TableCell>
        </StyledResultsRow>
    );
}

