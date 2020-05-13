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
                        <img src={player.images.default} alt=""/>
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

/*
active: true
country: {images: {…}, name: "China", short_name: "CN", region: {…}}
deleted_at: null
first_name: "Zhang"
id: 10761
images: {fallback: true, default: "https://img.abiosgaming.com/other/New-Abios-Place-Holder.png", thumbnail: "https://img.abiosgaming.com/other/thumbnails/New-Abios-Place-Holder.png"}
last_name: "Ruida"
nick_name: "Faith_Bian"
race: null
roles: (2) [{…}, {…}]
social_media_accounts: []
__proto__: Object*/

/*display: flex;
justify-content: space-around;
/!* align-content: center; *!/
/!* text-align: center; *!/
/!* display: block; *!/
/!* margin-left: auto; *!/
/!* margin-right: auto; *!/
text-align: center;
/!* padding-bottom: 31%; *!/
/!* margin-top: 1%; *!/
padding-top: 20%;
padding-bottom: 20%;*/
