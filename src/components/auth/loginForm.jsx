import React from "react";
import Joi from "joi-browser";
import Form from "../../common/input";


class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().min(5).label("Username"),
    password: Joi.string().required().min(5).label("Password"),
  };

  doSubmit = async() => {
       //Call the server
       try {
        const {data} = await authService.loginUser(this.state.data);
        console.log(data);
      }catch(ex) {
        if (ex.response && ex.response.status === 404) {
          const errors = {...this.state.errors};
          errors.username = ex.response.data;
          this.setState({ errors});
        }
      }
  };

  render() {
    return (
      <div>
        <div className="col-md-4 offset-md-4">
          <center>
            <h1>Login</h1>
          </center>
          <form onSubmit={this.handleSubmit}>
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}
            {this.renderButton("Login")}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
