import React, { Component } from "react";
import API from "./API.js";
import Table from "./Table.js";
import Spinner from "./Spinner.js";

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
            this.setState({employeeList: res.data.results})
            console.log(this.state.employeeList);
        })
        .catch(err => console.log(err));
    }



    render() {

        return (
            <div>
            {/* < Spinner /> */}
            <p>hello</p>
            </div>

        );
}

}

export default Employee;