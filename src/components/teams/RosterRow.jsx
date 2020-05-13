import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import {ConvertRole} from "./Convertions";
import styled from "styled-components";


const StyledCell = styled(TableCell)`
    width:20% !important;
    background-color: rgb(253, 253, 253) !important;
    border-bottom: 5px solid rgba(226, 230, 244, 1) !important;
`;

const StyledRow = styled(TableRow)`
    background-color: rgb(253, 253, 253) !important;
    border-bottom: 5px solid rgba(226, 230, 244, 1) !important;
`;


export default function RosterRow(props) {
    const player = props.player;
    console.log("player", player.country.name);

    return (
        <StyledRow key={player.id}>
            <StyledCell component="th" scope="row">
                {player.nick_name}
            </StyledCell>
            <TableCell align="left">
                <img src={player.images.default} alt=""/>
            </TableCell>
            <TableCell align="center">
                {player.first_name} {player.last_name}
            </TableCell>
            <TableCell align="center" >
                <div>
                    <div>
                        <img src={player.country.images.default} alt=""/>
                    </div>
                    <div>
                        {player.country.name}
                    </div>
                </div>

            </TableCell>
            <TableCell align="center">
                {player.roles.map((role) => {
                    return <div key={role.name}>{ConvertRole(role.name)} </div>;
                })}
            </TableCell>
        </StyledRow>
    );
}