import React from 'react'
import {CardElement, InjectStripe, ReactStripeElements} from 'react-stripe-elements'
import { Link } from 'react-router-dom'



class Form extends React.Component{

    state = {
        name: '',
        amount: ''
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      };

    render(){
        return (
            <div>
                <div>
                <label>Name</label>
                <input className='name' type='text' value={this.state.name} onChange={this.handleChange}></input>
            </div>
              <div>
              <label>Amount</label>
              <input className='name' type='text' value={this.state.amount} onChange={this.handleChange}></input>
              </div>
              <CardElement />
              <Link to='/MyAccount'><button className='Option'>Back</button></Link>
              </div>
            )
    }
}

export default Form 