import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import {ConvertStatus} from "../teams/Convertions";




export default function ResultsRow(props) {

    return (
        <TableRow key={props.team.id} component="a" href={"/team/" + props.team.id}>
            <TableCell scope="row">
                {props.team.rank}
            </TableCell>
            <TableCell scope="row">
                <img src={props.team.logo} alt=""/>
            </TableCell>
            <TableCell align="center">{props.team.name}</TableCell>
            <TableCell align="center">{ConvertStatus(props.team.status)}</TableCell>
            <TableCell align="center">{props.team.dcp}</TableCell>
        </TableRow>
    );
}

