import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends React.Component {
  //   handleFizzBuzz(){
  //     for(let i = 0; i <= 100; i ++){
  //     const multipleOf3 = i % 3 === 0;
  //     const multipleOf5 = i % 5 === 0;

  //     if(multipleOf3 && multipleOf5) console.log(i + ' FizzBuzz')
  //     else if(multipleOf3) console.log( i + ' Fizz')
  //     else if( multipleOf5) console.log( i + ' Buzz')
  //     else console.log(i)
  //   }
  // }

  render() {
    return (
      <div>
        <div>
          <div className="Navbar">
            <Link to="/login">
              <button className="OptionHome">Sign in</button>
            </Link>
            <Link to="/signup">
              <button className="OptionHome">Sign up</button>
            </Link>
          </div>
        </div>
        <div className="mainContent">
          <div className="column">
            <h3>Events</h3>
            <div>no upcoming events...</div>
          </div>
          <div className="columnCenter">
            <h3>About</h3>
          </div>
          <div className="column">
            <h3>Contact us</h3>
            mail@mail.Com
            <br />
            123 street
            <br />
            123-456-7890
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
