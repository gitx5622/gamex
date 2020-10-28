import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { SignUp } from "../../store/auth/actions/authActions";
import { Link } from "react-router-dom";
import {Row, Col} from 'shards-react';

const Register = () => {
  const currentState = useSelector((state) => state.Auth);

  const [user, setUser] = useState({
      first_name:'',
      last_name:'',
      username:'',
      email: '',
      password: '',
      password_confirmation:''
  });
  const dispatch = useDispatch();

  const addUser = (credentials) => dispatch(SignUp(credentials));

  const handleChange = e => {
      setUser({
          ...user,
          [e.target.name]: e.target.value
      })
  };
  const submitUser = (e) => {
      e.preventDefault();
      addUser({
          first_name: user.first_name,
          last_name: user.last_name,
          username: user.username,
          email: user.email,
          password: user.password,
          password_confirmation: user.password_confirmation
      });
  };

  if(currentState.isAuthenticated){
    return <Redirect to='/' />
  }

    return (
      <div className="auth-form">
        <div className="col-md-4 offset-md-4">
          <center>
            <h1>Register</h1>
          </center>
          <form onSubmit={submitUser}>
          <div className="form-group">
                <label htmlFor="first_name">FirstName</label>
                <input 
                type="text" 
                name="first_name"
                className="form-control" 
                id="first_name"
                onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">LastName</label>
                <input 
                type="text" 
                name="last_name"
                className="form-control" 
                id="last_name"
                onChange={handleChange} 
                />
              </div>
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
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                name="email"
                className="form-control" 
                id="email"
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
              <div className="form-group">
                <label htmlFor="password_confirmation">Password Confirmation</label>
                <input 
                type="password" 
                name="password_confirmation"
                onChange={handleChange}
                className="form-control" 
                id="password_confirmation"/>
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
                <h6>Already have an account   <Link to="/login">Login</Link></h6>
              </Col>
              </Row>
            </form>
        </div>
      </div>
    );
}
export default Register;
