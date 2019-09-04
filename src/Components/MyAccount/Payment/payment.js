import React from 'react'
import Form from './form'
import './payment.css'

import { StripeProvider, Elements } from 'react-stripe-elements'

class Payment extends React.Component{

    render(){
        return(
            <div>
            <div className='paymentCard'>
         <StripeProvider apiKey='pk_test_VHFo0O0JJi6j2cR36ZOlNhEq000VJk4OBdl'>
             <Elements>
            <Form />
             </Elements>
         </StripeProvider>
         </div>
         </div>
        )
    }
}

export default Payment