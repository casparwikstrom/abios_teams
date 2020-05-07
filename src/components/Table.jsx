import React from 'react';
import ReactDOM from 'react-dom';
import {AutoSizer, List, Column, Table} from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import "../assets/styling/Table.css"

// List data as an array of strings
const list = [

    // And so on...
];
/*
* {
    border: 1px solid red;
}
*/


function rowRenderer({key, index, style}) {
    return (
        <div>
            {({index}) => list[index]}
        </div>
    );
}

function MyTable() {
    return (
        <AutoSizer>
            {({height, width}) => (
                <Table
                    width={300}
                    height={100}
                    headerHeight={20}
                    rowHeight={30}
                    rowCount={list.length}
                    rowGetter={rowRenderer}>
                    <Column label="Name" dataKey="name" width={100} />
                    <Column width={200} label="Description" dataKey="description" />
                </Table>
            )}
        </AutoSizer>
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