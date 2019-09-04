import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";
import { Link } from 'react-router-dom'


class Confirm extends React.Component {
  next = e => {
    e.preventDefault();
    this.props.nextPage();
  };

  previous = e => {
    e.preventDefault();
    this.props.prevPage();
  };

  render() {
    const {
      values: {
        parentFirstName,
        parentLastName,
        email,
        phoneNumber,
        childFirstName,
        childLastName
      }
    } = this.props;
    return (
      <div className="EnrollBackground">
              <div className='accountNavbar'>
              <Link to="/myAccount">
              <button className="OptionHome">Back to My Account</button>
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
        <div className="EnrollSummary">Confirm?</div>
        <div className="Page1Layout">
          <MuiThemeProvider>
            <React.Fragment>
              <List>
                <ListItem
                  primaryText="First Name"
                  secondaryText={parentFirstName}
                />
                <ListItem
                  primaryText="Last Name"
                  secondaryText={parentLastName}
                />
                <ListItem
                  primaryText="Child Name"
                  secondaryText={childFirstName}
                />
                <ListItem primaryText="Email" secondaryText={email} />
                <ListItem
                  primaryText="Phone Number"
                  secondaryText={phoneNumber}
                />
              </List>
              <div className="Button">
                <RaisedButton
                  label="Go Back"
                  primary={false}
                  style={styles.button}
                  onClick={this.previous}
                />
                <RaisedButton
                  label="Submit"
                  primary={true}
                  style={styles.button}
                  onClick={this.next}
                />
              </div>
            </React.Fragment>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
const styles = {
  button: {
    height: 20,
    width: 100
  }
};

export default Confirm;
