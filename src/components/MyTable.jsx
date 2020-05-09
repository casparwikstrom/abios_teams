import React from 'react';
import ReactDOM from 'react-dom';
import {AutoSizer, Column, Table} from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import "../assets/styling/Table.css"


// List data as an array of strings
const list = [

    // And so on...
];




function MyTable(props) {
/*console.log("props", props)*/
    const row = ({index}) => props.teams[index];

    return (
        <Table
            width={300}
            height={300}
            headerHeight={20}
            rowHeight={30}
            rowCount={list.length}
            rowGetter={row}>
            <Column label="Name" dataKey="name" width={100} />
            <Column width={150} label="Description" dataKey="description" />
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