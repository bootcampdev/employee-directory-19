import React, { Component } from "react";
import API from "./API.js";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const { SearchBar } = Search;

class Employee extends Component {
    state = {
        //search: "",
        employeeList: []
    };


    componentDidMount() {

        //
        // could keep the getEmployees code in here

        this.getEmployees();
    };

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

        const columns = [{
            dataField: "login.uuid",
            text: "Id",
            style: { backgroundColor: "#fdfcdc" }
        }, {
            dataField: "cell",
            text: "Cell"
        }, {
            dataField: "name.last",
            text: "Last Name",
            sort: true
        }, {
            dataField: "name.first",
            text: "First Name",
            sort: true
        }, {
            dataField: "dob.age",
            text: "Age",
            sort: true
        }, {
            dataField: "gender",
            text: "Gender",
            sort: true
        }];

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

            <div className="App">
                <h1 className="Table-header">Employee Table</h1>

                <ToolkitProvider
                    keyField="id"
                    data={this.state.employeeList}
                    columns={columns}
                    search>
                    {
                        props => (
                            <div>
                                <br />
                                <SearchBar {...props.searchProps} />
                                <hr />

                                <BootstrapTable
                                    hover
                                    keyField="login.uuid" 
                                    data={this.state.employeeList} 
                                    columns={columns} />
                            </div>

                        )}
                </ToolkitProvider>

            </div>
        )
    }
};
export default Employee;
