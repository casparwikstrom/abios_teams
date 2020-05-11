import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React from "react";


export default function ResultsRow(props) {
    return (
        <TableRow key={props.team.id} component="a" href={"/team/" + props.team.id}>
            <TableCell scope="row">
                {props.team.rank}
            </TableCell>
            <TableCell scope="row">
                <img src={props.team.logo} alt=""/>
            </TableCell>
            <TableCell align="right">{props.team.name}</TableCell>
            <TableCell align="right">{props.team.status}</TableCell>
            <TableCell align="right">{props.team.dcp}</TableCell>
        </TableRow>
    );
}

