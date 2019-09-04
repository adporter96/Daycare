import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import './page1.css'
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
    <div className='EnrollSummary'>Parent Information</div>
     <div className='Page1Layout'>
      <MuiThemeProvider>
        <React.Fragment>
          <TextField 
            floatingLabelText="First Name"
            onChange={handleChange('parentFirstName')}
            defaultValue={values.parentFirstName}
          />
             <TextField
            floatingLabelText="Last Name"
            onChange={handleChange('parentLastName')}
            defaultValue={values.parentLastName}
          />
             <TextField
            floatingLabelText="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
             <TextField
            floatingLabelText="Phone Number"
            onChange={handleChange('phoneNumber')}
            defaultValue={values.phoneNumber}
          />
          <RaisedButton 
          label='Next'
          primary={true}
          style={styles.button}
          onClick={this.next}
          />
        </React.Fragment>
      </MuiThemeProvider>
      </div>
      </div>
    );
  }
}



const styles =  theme => ({
    button: {
        height: 20,
        width: 100
    }, 
    input: {
      color: 'white'
    }
})

export default Page1