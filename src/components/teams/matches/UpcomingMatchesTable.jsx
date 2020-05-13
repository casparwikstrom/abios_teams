import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MatchesRow from "./MatchesRow";
import styled from "styled-components";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});

const StyledTableContainer = styled(TableContainer)`
  background-color: rgb(244, 248, 250) !important;
`;

const StyledTable = styled(Table)`
  padding: 20px !important;
  background-color: rgb(253, 253, 253) !important;
  box-shadow: 0 5px 15px 0 rgba(95, 150, 250, 0.15) !important;
`;

export default function UpcomingMatchesTable(props) {
  const classes = useStyles();
  return (
    <StyledTableContainer component={Paper}>
      <StyledTable className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">
              <h3>OPPONENT</h3>
            </TableCell>
            <TableCell align="center">
              <h3>DATE</h3>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.upcoming_matches.map((match) => (
            <MatchesRow upcoming={true} {...match} key={match.id} />
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
}

UpcomingMatchesTable.prototype = {
  upcoming_matches: PropTypes.array,
};
