import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ResultsRow from "./ResultsRow";
import styled from "styled-components";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});

const StyledTableContainer = styled(TableContainer)`
  padding: 20px;
  background-color: rgb(226, 230, 244) !important;
`;

const StyledTable = styled(Table)`
  padding: 20px;
  background-color: rgb(253, 253, 253) !important;
`;

export default function ResultsTable(props) {
  const classes = useStyles();
  return (
    <StyledTableContainer component={Paper}>
      <StyledTable className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <h3>RANK</h3>
            </TableCell>
            <TableCell align="left">
              <h3>TEAM</h3>
            </TableCell>
            <TableCell align="right">
              <h3>INVITATION STATUS</h3>
            </TableCell>
            <TableCell align="right">
              <h3>DPC POINTS</h3>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.teams.map((team) => (
            <ResultsRow {...team} key={team.id} />
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
}

ResultsTable.prototype = {
  teams: PropTypes.array,
};
