import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import './page2.css'
import { Link } from 'react-router-dom'


class Page1 extends React.Component {
  // create next and previous page method

  next = e => {
    e.preventDefault();
    this.props.nextPage();
  };

  previous = e => {
    e.preventDefault();
    this.props.prevPage();
  };

  render() {
    const { values, handleChange } = this.props;
    // use mui to add the text fields and buttons
    // must be wrapped in a mui theme provider and react.fragment tag
    return (
        <div className='EnrollBackground'> 
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
        <div className='EnrollSummary'>Child Information</div>
        <div className='Page1Layout'>
      <MuiThemeProvider>
        <React.Fragment>
          <TextField
            floatingLabelText="Child First Name"
            onChange={handleChange('childFirstName')}
            defaultValue={values.childFirstName}
          />
             <TextField
            floatingLabelText="Child Last Name"
            onChange={handleChange('childLastName')}
            defaultValue={values.childLastName}
          />
             <TextField
            floatingLabelText="Age"
            onChange={handleChange('age')}
            defaultValue={values.age}
          />
             <TextField
            floatingLabelText="Gender"
            onChange={handleChange('gender')}
            defaultValue={values.gender}
          />
          <div className='Button'>
              <RaisedButton
          label='Previous'
          primary={false}
          style={styles.button}
          onClick={this.previous}
          />
          <RaisedButton
          label='Next'
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
}

export default Page1