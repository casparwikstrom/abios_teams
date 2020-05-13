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
import styled from "styled-components";

const useStyles = makeStyles({
    table: {
        minWidth: 800,
    },
});


const StyledTableContainer = styled(TableContainer)`
  background-color: rgb(244, 248, 250) !important;
`;

const StyledTable = styled(Table)`
  padding:20px !important;
  background-color: rgb(253, 253, 253) !important;
  box-shadow:0 5px 15px 0 rgba(95,150,250,.15) !important;
`;

export default function RosterTable(props) {

    const players = props.roster.roster.players;
    const classes = useStyles();

    return (
        <StyledTableContainer component={Paper}>
            <StyledTable className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Nick</TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Info</TableCell>
                        <TableCell align="center">Position</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {players.map((player) => (
                        <RosterRow align="center" player={player} key={player.id}/>
                    ))}
                </TableBody>
            </StyledTable>
        </StyledTableContainer>
    );
}

