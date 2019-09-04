import React from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import Confirm from "./confirm";
import Submit from "./submit";
class EnrollForm extends React.Component {
  constructor(){
    super()
 
 this.state = {
    page: 1,
    parentFirstName: "",
    parentLastName: "",
    phoneNumber: "",
    email: "",
    childFirstName: "",
    childLastName: "",
    age: "",
    gender: ""
  } 
}

  nextPage = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  prevPage = () => {
    const { page } = this.state;
    this.setState({ page: page - 1 });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const {
      page,
      parentFirstName,
      parentLastName,
      phoneNumber,
      email,
      childFirstName,
      childLastName,
      age,
      gender
    } = this.state;
    const values = {
      page,
      parentFirstName,
      parentLastName,
      phoneNumber,
      email,
      childFirstName,
      childLastName,
      age,
      gender
    };
    switch (page) {
      case 1:
        return (
          <Page1
            nextPage={this.nextPage}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Page2
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            handleChange={this.handleChange}
            values={values}
          />
        )
        case 4:
        return (
            <Submit/>
        )
    }
  }
}

export default EnrollForm;
