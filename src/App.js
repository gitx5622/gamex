import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/main/notFound";
import Home from "./components/main/home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <div className="content">
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/notfound" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/notfound" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
