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
import MatchesRow from "./MatchesRow";

const useStyles = makeStyles({
    table: {
        minWidth: 800,
    },
});

export default function MatchesTable(props) {
    const upcoming_matches = props.matches;
    const upcoming = true;
    const classes = useStyles();
    console.log("matches props", upcoming_matches)

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Vs</TableCell>
                        <TableCell align="center">Opponent</TableCell>
                        <TableCell align="center">Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {upcoming_matches.map((match) => (
                        <MatchesRow match={{match, upcoming}} key={match.id}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}