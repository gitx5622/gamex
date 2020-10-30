import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./components/main/notFound";
import Home from "./components/main/home";
import LoginForm from "./components/auth/loginForm";
import RegisterForm from "./components/auth/registerForm";
import GameDetails from "./components/main/gameDetails";

const App = () => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <div className="content" >
        <Switch>
          <Route path="/game/:id" component={GameDetails}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/register" component={RegisterForm}/>
          <Route path="/notfound" component={NotFound} />
          <Route exact path="/" component={Home}/>
          <Redirect to="/notfound" />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
