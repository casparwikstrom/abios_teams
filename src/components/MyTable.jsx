import React from 'react';
import ReactDOM from 'react-dom';
import {AutoSizer, Column, Table} from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import "../assets/styling/Table.css"



/*

"team_id": 1,
    "team_name": "team 1",
    "status": "qualified",
    "dcp": 3000
*/



function MyTable(props) {
/*console.log("props", props)*/

    const row = ({index}) => props.teams[index];

    return (
        <Table
            gridStyle={"100%"}
            {...props}
            sort={props.teams}
            width={300}
            height={300}
            headerHeight={20}
            rowHeight={30}
            rowCount={props.teams.length}
            rowGetter={row}>
            <Column width={150} label="logo" dataKey="logo" />
            <Column width={100} label="Name" dataKey="name" />
            <Column width={150} label="Description" dataKey="status" />
            <Column width={150} label="Description" dataKey="dcp" />
        </Table>
    );
}

export default MyTable;


// Render your list
/*ReactDOM.render(
    <AutoSizer>
        {({height, width}) => (
            <List
                height={height}
                rowCount={list.length}
                rowHeight={20}
                rowRenderer={rowRenderer}
                width={width}
            />
        )}
    </AutoSizer>,
    document.getElementById('example'),
);*/