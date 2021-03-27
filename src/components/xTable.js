import React from "react";
import { useTable } from "react-table";

//
// props comming in are columns and data.  data is from the axios call
// columns defines the table columns

export default function Table({ columns, data }) {
    // Table component logic and UI come here
    const {
        //
        // table props and body props from react-table
        getTableProps,      
        getTableBodyProps, 
        //
        // headerGroups, if your table has groupings
        headerGroups,    
        //
        // rows for the table based on the data passed  
        rows,              
        //
        // this function needs to be called for each row 
        // before getting the row props
        prepareRow          
    } = useTable({
        columns,
        data
    });

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}