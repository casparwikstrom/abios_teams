import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RosterRow from "./RosterRow";

const useStyles = makeStyles({
    table: {
        minWidth: 800,
    },
});

export default function RosterTable(props) {

    const players = props.roster.roster.players;
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Nick</TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Position</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {players.map((player) => (
                        <RosterRow align="center" player={player} key={player.id}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}