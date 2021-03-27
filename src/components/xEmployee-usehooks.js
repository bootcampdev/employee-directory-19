import React, { useState, useEffect } from "react";
import axios from "axios";
import API from "./API.js";
import Table from "./Table.js";
import Spinner from "./Spinner.js";

//
// function

const Employee = () => {

    const [employeeList, setEmployeeList] = useState([])


    useEffect(() => {
        (async () => {
            const result = await axios("https://randomuser.me/api/?results=1&format=JSON");

            // Object.keys(data).reduce((array, key) => {
            //     return [...array, {key: data[key]}]
            // }, [])

            // convert employee list object into an array
            setEmployeeList(Object.values(result.data.results));

            console.log(result.data.results);
            console.log(employeeList);
        })();
    }, []);


    return (
        <div>
            <p>hello</p>

            <ul className="list-group">
                {
                    // { employeeList }
                    //     //.filter(item => item.purchased)  // if true that item is returned
                    //     .map((item => <li key={item.cell}> {item.name.last} Purchased: {item.name.first.toString()}</li>
                    //     ))

                    // {employeeList.map((emp, index) => (
                    //     <option key={emp.cell}>{emp.anme}</option>
                    //   ))}
                    // ))

                    //{employeeList}
                       
                }

            </ul>

        </div>

    );
}



export default Employee;