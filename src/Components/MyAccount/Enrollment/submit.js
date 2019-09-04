import React from "react";
import { Link } from 'react-router-dom'
import './submit.css'
class Submit extends React.Component {

  render() {
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
        <div>
          Thank you for your submission. A director will contact you by email
          with further instruction.
        </div>
        <Link to="/MyAccount">
          <button className='completeButton'>Back to my account</button>
        </Link>
      </div>
    );
  }
}

export default Submit;
