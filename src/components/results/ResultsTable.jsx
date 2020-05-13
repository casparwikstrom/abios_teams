import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ResultsRow from "./ResultsRow";
import Typography from '@material-ui/core/Typography';
import ReactDOM from 'react-dom';
import styled from "styled-components";


const useStyles = makeStyles({
    table: {
        minWidth: 800,
    },
});

const StyledTableContainer = styled(TableContainer)`
  padding:20px;
  background-color: rgb(226, 230, 244) !important;
`;

const StyledTable = styled(Table)`
  padding:20px;
  background-color: rgb(253, 253, 253) !important;
`;

export default function SimpleTable(props) {
    const classes = useStyles();

    return (
        <StyledTableContainer component={Paper}>
            <StyledTable className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow classes={{ label: 'root' }}>
                        <TableCell align="left">Rank</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="left">Status</TableCell>
                        <TableCell align="center">Points</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.teams.map((team) => (
                        <ResultsRow classes={{ label: 'root' }} team={team} key={team.id}/>
                    ))}
                </TableBody>
            </StyledTable>
        </StyledTableContainer>
    );
}
