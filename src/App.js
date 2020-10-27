import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/main/notFound";
import Home from "./components/main/home";
import LoginForm from "./components/auth/loginForm";
import RegisterForm from "./components/auth/registerForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <div className="content">
          <Switch>
            <Route path="/login" component={LoginForm}/>
            <Route path="/register" component={RegisterForm}/>
            <Route path="/" component={Home}/>
            <Route path="/notfound" component={NotFound} />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
