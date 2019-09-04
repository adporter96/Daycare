import React from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./users.css";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      allUsers: [],
      view: "",
      date: new Date(),
      description: "",
      title: ""
    };
    this.updateDate = this.updateDate.bind(this);
  }

  componentDidMount() {
    axios
      .get("/allUsers")
      .then(response => {
        this.setState({ allUsers: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  updateFirstName = (id) => {
    const firstNameValue = window.prompt("");
    if (firstNameValue === null ) {
      return (
        alert('error updating user')
      )
    } else if ( !firstNameValue) {
      return alert('error updating user')
    }

    axios
    .put(`/updateUser/firstName/${id}`, {first_name: firstNameValue})
    .then(response => {
      this.setState({allUsers: response.data})
    })
  }

  updateLastName = (id) => {
    const lastNameValue = window.prompt('')
    if(lastNameValue === null ) {
      return (
        alert('error updating user')
      )
    }
    axios
    .put(`/updateUser/lastName/${id}`, {last_name: lastNameValue})
    .then(response => {
      this.setState({allUsers: response.data})
    })
  }
  updateEmail = (id) => {
    const emailValue = window.prompt('')
    if(emailValue === null ) {
      return (
        alert('error updating user')
      )
    }
    axios
    .put(`/updateUser/email/${id}`, {email: emailValue})
    .then(response => {
      this.setState({allUsers: response.data})
    })
  }

  updateDate(date) {
    this.setState({ startDate: date });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleReportCreate(userId) {
    console.log(userId);
    return (
      <div className="reportCard">
        <h1>Title</h1>
        <input className='inputTitle'
          onChange={this.handleChange}
          value={this.state.title}
          name="title"
        />
        <h1>date</h1>
        <DatePicker
          value={this.state.date}
          name="date"
          selected={this.state.startDate}
          onChange={this.updateDate}
        />
        <h1>Description</h1>
        <textarea
          className='descriptionBox'
          onChange={this.handleChange}
          value={this.state.description}
          name="description"
        />
        <button
          className="submitReport"
          onClick={() =>
            this.submitReport(
              userId,
              this.state.description,
              this.state.date,
              this.state.title,
              alert('report sent')
            )
          }
        >
          Send
        </button>
      </div>
    );
  }

  // send report to assigned user
  submitReport = (userId, description, title, date) => {
    axios
      .post(`/reports/create/${userId}`, {
        description: description,
        title: title,
        date: date
      })
      .then(response => axios.get("/allusers"))
      .then(({ data: allUsers }) => this.setState({ allUsers, description: '', title: '', date: '' }))
      .catch(error => console.error(error));
  };

  handleDeleteReport() {
    axios.delete("");
  }

  handleDelete = id => {
    console.log(id);
    axios
      .delete(`/users/${id}`)
      .then(response => axios.get("/allusers"))
      .then(({ data: allUsers }) => this.setState({ allUsers }))
      .catch(error => console.error(error));
  };

  render() {
    const users = this.state.allUsers.map((user, i) => {
      return (
        <div className="users" key={i}>
          <div className="userInfo">
            {user.first_name}
            <button onClick={() => this.updateFirstName(user.id)}>...</button>
          </div>
          <div className="userInfo">{user.last_name}<button onClick={() => this.updateLastName(user.id)}>...</button></div>
          <div className="email">{user.email}<button onClick={() => this.updateEmail(user.id)}>...</button></div>
          <button className='Option'
            onClick={() => {
              this.setState({ view: "report", selectedUserId: user.id });
            }}
          >
            New Report
          </button>
          <button
            className="Option"
            onClick={() => this.handleDelete(user.id)}
          >
            Delete User
          </button>
        </div>
      );
    });
    return (
      <div>
        <div className="usersContainer">{users}</div>
        {this.state.view === "report"
          ? this.handleReportCreate(this.state.selectedUserId)
          : null}
      </div>
    );
  }
}
export default Users;
