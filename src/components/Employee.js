import React, { Component } from "react";
import API from "./API.js";


class Employee extends Component {
    state = {
        search: "",
        breeds: [],
        results: [],
        error: ""
    };

    componentDidMount() {

        API.getEmployees()
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    };


    render() {
        return (
            <p>hello</p>
        );
    }
}

export default Employee;