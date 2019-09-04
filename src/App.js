import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import AdminHome from "./Components/Admin/adminHome";
import Login from "./Components/Login/login";
import Signup from "./Components/Signup/signup";
import MyAccount from "./Components/MyAccount/myAccount";
import EnrollForm from "./Components/MyAccount/Enrollment/enrollForm";
import UserReports from './Components/MyAccount/Reports/userReports'
import Payment from "./Components/MyAccount/Payment/payment";
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/adminHome" component={AdminHome} />
            <Route path="/myAccount" component={MyAccount} />
            <Route path="/enrollForm" component={EnrollForm} />
            <Route path='/userReports' component={UserReports} />
            <Route path="/payment" component={Payment} />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
