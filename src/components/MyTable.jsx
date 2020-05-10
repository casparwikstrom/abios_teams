import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 800,
    },
});

/*{
    "team_id": 7,
    "team_name": "team 1",
    "status": "qualified",
    "dcp": 3000,
    "img": "https://img.abiosgaming.com/competitors/virtus-pro-vp-oldnt-logo.png"
}*/



export default function SimpleTable(props) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.teams.map((row) => (
                        <TableRow key={props.teams.id}>
                            <TableCell component="th" scope="row">
                                {props.teams.team_name}
                            </TableCell>
                            <TableCell align="right">{props.teams.img}</TableCell>
                            <TableCell align="right">{props.teams.team_name}</TableCell>
                            <TableCell align="right">{props.teams.status}</TableCell>
                            <TableCell align="right">{props.teams.dcp}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}