import React from "react";
import axios from "axios";
import './userReports.css'
import { Link } from 'react-router-dom'

class UserReports extends React.Component {
  state = {
    reports: []
  };


  componentDidMount() {
    axios
      .get(`/reports`)
      .then(response => {
        console.log(response)
        this.setState({ reports: response.data });
      })

      .catch(error => {
        console.error(error);
      });
  }

  

  render() {
    const reports = this.state.reports.map((reports) => {
      console.log(reports)
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
      return(
        <div>
          {reports}

          <Link to='/MyAccount'><button className='Option'>Back</button></Link>
        </div>
      )
  }
}
export default UserReports;
