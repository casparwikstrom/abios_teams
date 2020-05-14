import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled from "styled-components";
import RosterTable from "./roster/RosterTable";
import UpcomingMatchesTable from "./matches/UpcomingMatchesTable";
import PastMatchesTable from "./matches/PastMatchesTable";
import { TabPanel } from "./TabPanel";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const StyledTabs = styled(AppBar)`
  background-color: rgb(143, 148, 252) !important;
  box-shadow: 0 5px 15px 0 rgba(95, 150, 250, 0.15);
`;

const StyledPanel = styled(TabPanel)`
  background-color: rgb(226, 230, 244) !important;
  box-shadow: 0 5px 15px 0 rgba(95, 150, 250, 0.15);
`;

export default function TeamTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <StyledTabs position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          color="blues"
        >
          <Tab label="Roster" {...a11yProps(0)} />
          <Tab label="Upcoming Matches" {...a11yProps(1)} />
          <Tab label="Past Matches" {...a11yProps(2)} />
        </Tabs>
      </StyledTabs>
      <StyledPanel value={value} index={0}>
        <h2>Roster</h2>
        <RosterTable roster={props.roster} />
      </StyledPanel>
      <StyledPanel value={value} index={1}>
        <h2>Upcoming Matches</h2>
        <UpcomingMatchesTable upcoming_matches={props.upcoming_matches} />
      </StyledPanel>
      <StyledPanel value={value} index={2}>
        <h2>Past Matches</h2>
        <PastMatchesTable past_matches={props.past_matches} />
      </StyledPanel>
    </div>
  );
}

TeamTabs.proptype = {
  upcoming_matches: PropTypes.array,
  past_matches: PropTypes.array,
  roster: PropTypes.object,
};
