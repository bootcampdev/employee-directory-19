import React, { Component } from "react";
import API from "./API.js";
import Table from "./Table.js";
import Spinner from "./Spinner.js";
import BootstrapTable from "react-bootstrap-table-next";

//import Styled from "styled-components"

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
            dataField: "id.value",
            text: "Cell"
          }, {
            dataField: "name.last",
            text: "Last Name"
          }, {
            dataField: "name.first",
            text: "First Name"
          }, {
            dataField: "dob.age",
            text: "Age"
          }, {
            dataField: "gender",
            text: "Gender"
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
                <p className="Table-header">Employee Table</p>

                <BootstrapTable keyField="id" data={this.state.employeeList} columns={columns} />
            </div>

        );
    }

}

export default Employee;