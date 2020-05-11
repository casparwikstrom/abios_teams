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
    const past_matches = props.matches.past_matches;
    const upcoming_matches = props.matches.upcoming_matches;
    console.log("upcoming_matches", upcoming_matches)
    console.log("past_matches", past_matches)
    console.log("matches props", props)

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        Upcoming
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">Win/Loss</TableCell>
                        <TableCell align="center">vs</TableCell>
                        <TableCell align="center">Opponent</TableCell>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {upcoming_matches.map((match) => (
                        <MatchesRow match={match} key={match.id}/>
                    ))}
                </TableBody>
                <TableHead>
                    <TableRow>
                        Past matches
                    </TableRow>
                </TableHead>
                <TableBody>
                    {past_matches.map((match) => (
                        <MatchesRow match={match} key={match.id}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}