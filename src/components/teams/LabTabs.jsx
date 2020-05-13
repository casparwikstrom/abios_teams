import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RosterTable from "./RosterTable";
import MatchesTable from "./MatchesTable";
import PastMatchesTable from "./PastMatchesTable";
import styled from "styled-components";


function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
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
    box-shadow:0 5px 15px 0 rgba(95,150,250,.15);
`;


const StyledPanel = styled(TabPanel)`
    background-color: rgb(226, 230, 244)!important;
    box-shadow:0 5px 15px 0 rgba(95,150,250,.15); 
`;

export default function SimpleTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const roster = props;
    const past_matches = props.past_matches;
    console.log("past_matches", props)
    const matches = props.upcoming_matches;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <StyledTabs position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Roster" {...a11yProps(0)} />
                    <Tab label="Upcoming Matches" {...a11yProps(1)} />
                    <Tab label="Past Matches" {...a11yProps(1)} />
                </Tabs>
            </StyledTabs>
            <StyledPanel value={value} index={0}>
                <h2>Roster</h2>
                <RosterTable roster={roster}/>
            </StyledPanel>
            <StyledPanel value={value} index={1}>
                <h2>Upcoming Matches</h2>
                <MatchesTable matches={matches}/>
            </StyledPanel>
            <StyledPanel value={value} index={2}>
                <h2>Past Matches</h2>
                <PastMatchesTable past_matches={past_matches}/>
            </StyledPanel>
        </div>
    );
}