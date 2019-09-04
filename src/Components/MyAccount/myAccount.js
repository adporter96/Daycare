import React from "react";
import "./myAccount.css";
import { Link } from "react-router-dom";
import axios from "axios";

class MyAccount extends React.Component {
  constructor(){
    super()

  this.state = {
    user1: null
  };
  }
  componentDidMount() {
    return axios
      .get("/users")
      .then(({ data: user1 }) => {
        this.setState({ user1 });
        console.log(user1);
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

  render() {
    if (!this.state.user1) return "User not found. Please try again";
    return (
      <div>
        <div className="Homepage">
          <div className="accountNavbar">
            <div className='Welcome'>
            Welcome, {this.state.user1.first_name}!</div>
            <Link to="/enrollForm">
              <button className="OptionHome">Enroll</button>
            </Link>
            <Link to ={`/userReports`}><button className='OptionHome'>My Reports</button></Link>
            <Link to="/payment">
              <button className="OptionHome">Pay</button>
            </Link>
            <Link to="/">
              <button className="OptionHome" onClick={this.handleLogout}>
                Sign out
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MyAccount;
