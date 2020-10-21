import React from "react";
import Joi from "joi-browser";
import Form from "../../common/form";
import * as userService from '../../services/userService';

class RegisterForm extends Form {
  state = {
    data: {
      name: "",
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().min(5).required().label("Name"),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = async() => {
    //Call the server
    try {
      await userService.registerUser(this.state.data)
    }catch(ex) {
      if (ex.response && ex.response.status === 404) {
        const errors = {...this.state.errors};
        errors.email = ex.response.data;
        this.setState({ errors});
      }
    }
  };

  render() {
    return (
      <div>
        <div className="col-md-4 offset-md-4">
          <center>
            <h1>Register</h1>
          </center>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("name", "Name")}
            {this.renderInput("email", "Email")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Register")}
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
