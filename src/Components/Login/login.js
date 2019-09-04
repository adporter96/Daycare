import React from "react";
import axios from "axios";
import "./login.css";

class Login extends React.Component {
  // manage the username(email) and password needed to login
  state = {
    email: '',
    password: '',
    user: ''
  };

  // create a method on click to submit the username and password
  handleLogin = async () => {
    try {
      const body = {
        email: this.state.email,
        password: this.state.password
      };

      if (body.email && body.password) {
        axios.post("/login", body).then((response) => {
          console.log(response);

          axios.get("/loggedIn").then(response => {
            this.setState({user: response.data});
          });

          if (response.data.isadmin === true) {
            this.props.history.push("/adminHome");
          } else {
            this.props.history.push("/myAccount");
          }
        });
      } else {
        alert("Login incorrect");
        this.props.history.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  handleAccountCreation() {} // Sign up here

  // try catch is similar to if else - if the email and password = email and password in state, push the user to the home page
  // using the history.push method - if incorrect - send an error

  // handleChange just because - for now. set state to e.target.name and value
  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleEnter = (e) => {
    if (e.which === 13) {
        this.handleLogin();
    }
}

  render() {
    return (
      
      <div>
        <div className="loginParent">
          <div className="loginCard">
            <div className="LoginHeader">Log In</div>
            <br />
            <input
              className="Input"
              name="email"
              type="text"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              className="Input"
              type="password"
              name="password"
              placeholder="Password"
              onKeyPress={this.handleEnter}
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button className="Submit" onClick={this.handleLogin}>
              Submit
            </button>
            <div />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
