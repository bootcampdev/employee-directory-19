import axios from "axios";

//
// Export an object with a "search" method that searches the for random employees

const API = {
  getEmployees: function() {

    return axios.get("https://randomuser.me/api/?results=3&format=JSON");
  }

    // axios
    //   .get("https://randomuser.me/api/?results=30&format=JSON")
    //   .then(response => {
    //     console.log(response.data.results);
    //     return(response);
    //     //this.setState({ users: response.data.results });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
};

export default API;