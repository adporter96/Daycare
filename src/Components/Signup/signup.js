import React from "react";
import "./signup.css";
import axios from "axios";

class Signup extends React.Component {
  // set state to the information needed to create an account

  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  //try catch - similar to the login
  handleSignup = async () => {
    try {
      const body = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      };
      if(body.firstName && body.lastName && body.email && body.password){
      await axios.post('/signup', body);
      alert("Account successfully created!");

      this.props.history.push("/login");
      } else {
        alert("please try again.");

      }
    } catch (error) {}
  };
// set up your handle change
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <div className="loginCard">
          <input
            className="Input"
            name="firstName"
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <input
            className="Input"
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <input
            className="Input"
            name="email"
            type="text"
            placeholder="Email address"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            className="Input"
            name="password"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="Submit" onClick={this.handleSignup}>
            Create Account
          </button>
        </div>
      </div>
    );
  }
}

export default Signup;
