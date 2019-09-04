import React from "react";
import Users from "./users";
import './adminHome.css'
import { Link } from "react-router-dom";
import axios from "axios";
import 'react-datepicker/dist/react-datepicker.css'



// create report for individual user


class AdminHome extends React.Component {
  constructor(){
    super()
  this.state = {
    users: [],
    allReports: [],
    view: '',
    date: new Date()
  };
  this.updateDate = this.updateDate.bind(this)
}
  componentDidMount() {
    return axios
      .get("/users")
      .then(({ data: user1 }) => {
        this.setState({ user1 });

        if (user1.isadmin === false) {
          this.props.history.push("/myAccount");
        }
      })
      .catch(error => {
        console.error(error);
        this.props.history.push("/");
      });
  }
  handleLogout() {
    axios.post("/logout");
    alert("successfully logged out");
  }

 allReports(){
   axios.get('/allReports')
   .then(response => {
     this.setState({allReports: response.data})
   })
 }


  updateDate(date){
    this.setState({startDate: date})
  }

updateView(name){
  this.setState({view: name})
}

  render() {
    const allReports = this.state.allReports.map((reports) => {
      return(
        <div className='userReports'>
        <div className="reportDate">
          <h4>Date</h4>
          {reports.date}
          </div>  
          <div className='reportTitle'>
            <h4>Title</h4>
            {reports.title}
          </div>
          <div className='reportDescription'>
            <h4>Description</h4>
            {reports.description}
          </div>
        </div>
    )
    })
    
    return (
      <div className='container'>
        <div className='column1'>
        <Users />
        {/* <button className='Option' onClick={this.allReports}>View Reports</button> */}
        <div>{allReports}</div>
          <Link to="/">
            <button className="Option" onClick={this.handleLogout}>
              Sign out
            </button>
          </Link>
        </div>
        {this.state.view === 'report' ? this.handleReport(): null} 
        </div>
    );
  }
}
export default AdminHome;
