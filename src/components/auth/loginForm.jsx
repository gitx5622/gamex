import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { SignIn } from "../../store/auth/actions/authActions";
import { Link } from "react-router-dom"
import {Row, Col} from 'shards-react';

const LoginForm = () => {
  const currentState = useSelector((state) => state.Auth);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const userLogin = (credentials) => dispatch(SignIn(credentials));

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const submitUser = (e) => {
    e.preventDefault();
    userLogin({
      username: user.username,
      password: user.password,
    });
  };

  if (currentState.isAuthenticated) {
    return <Redirect to="/" />;
  }
    return (
      <div className="auth-form">
        <div className="col-md-4 offset-md-4">
          <center>
            <h1>Login</h1>
          </center>
          <form onSubmit={submitUser}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                name="username"
                className="form-control" 
                id="username"
                onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                name="password"
                onChange={handleChange}
                className="form-control" 
                id="password"/>
              </div>
              <Row>
              <Col>
              <button
                  type="submit"
                  className="btn btn-solid"
                  name="login"
                >
                  Login
                </button>
                </Col>
              <Col>
                <h6>Dont have an account    <Link to="/register">Register</Link></h6>
              </Col>
              </Row>
             
            </form>
        </div>
      </div>
    );
}

export default LoginForm;
