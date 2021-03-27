import React, { Component } from "react";
import API from "./API.js";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const { SearchBar } = Search;

class Employee extends Component {
    state = {
        employeeList: []
    };

    componentDidMount() {
        //
        // could keep the getEmployees code in here, load when component has mounted

        this.getEmployees();
    };

    //
    // get a list of employees and setSate of employee list with the results

    getEmployees = () => {
        API.getEmployees()
            .then(res => {
                console.log(res);
                this.setState({ employeeList: res.data.results })
                console.log(this.state.employeeList);
            })
            .catch(err => console.log(err));
    }


    render() {
        //
        // array of columns definitions for our table

        const columns = [{
            dataField: "login.uuid",
            text: "Id",
            style: { backgroundColor: "#fdfcdc" },
            hidden: true
        }, {
            dataField: "name.last",
            text: "Last Name",
            style: { backgroundColor: "#e1f1fd" },
            sort: true
        }, {
            dataField: "name.first",
            text: "First Name",
            style: { backgroundColor: "#e1f1fd" },
            sort: true
        }, {
            dataField: "email",
            text: "Email"
        }, {
            dataField: "cell",
            text: "Cell"
        }, {
            dataField: "dob.age",
            text: "Age",
            sort: true
        }, {
            dataField: "gender",
            text: "Gender",
            align: "center",
            sort: true
        }, {
            dataField: "picture.thumbnail",
            text: "Image",
            formatter: imageFormatter
        }];

        //
        // format the image column 

        function imageFormatter(cell, row) {
            return (<img alt="emp image" style={{ width: 50 }} src={cell} />)
        }

        //
        // kept the html table for reference but is replaced with the react-bootrap-table

        return (
            // <div>
            //     <table>
            //         <tbody>
            //             <tr>
            //                 <td> Name </td>
            //                 <td> Cell </td>
            //                 <td> City </td>
            //                 <td> Gender </td>
            //             </tr>

            //             {this.state.employeeList.map((emp, index) => (
            //                 <tr key={index}>
            //                     <td> {emp.name.last}  {emp.name.first} </td>
            //                     <td> {emp.cell} </td>
            //                     <td> {emp.location.city} </td>
            //                     <td> {emp.gender} </td>
            //                 </tr>
            //             )
            //             )}
            //         </tbody>
            //     </table>
            // </div>

            // --------------------------------------------------
            // the toolkitprovider allows us the search the table 

            <div className="App">
                <h1 className="Table-header">Employee Table</h1>

                <ToolkitProvider
                    keyField="id"
                    data={this.state.employeeList}
                    columns={columns}
                    search>
                    {
                        props => {
                            console.log("props: ", props)
                            return (
                                <div>
                                    <br />
                                    <SearchBar {...props.searchProps} />
                                    <hr />

                                    <BootstrapTable
                                        {...props.baseProps}
                                        hover
                                        keyField="login.uuid"
                                        data={this.state.employeeList}
                                        columns={columns} />
                                </div>
                            )
                        }}
                </ToolkitProvider>
            </div>
        )
    }
};
export default Employee;
