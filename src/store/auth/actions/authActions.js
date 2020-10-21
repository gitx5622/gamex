import axios from 'axios';
import API_ROUTE from "../../../utils/constants";
import {history} from "../../../utils/history";
import setAuthorizationToken from "../../../utils/authorization";
import { BEFORE_STATE, SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from "../actionTypes/index";
// import {message} from "antd";

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(SignOut());
        }, expirationTime * 1000);
    };
};

export const SignIn = (credentials) => {
    return async dispatch => {
        dispatch({type: BEFORE_STATE});
        try {
            const res = await axios.post(`${API_ROUTE}/login`, credentials);
            let userData = res.data;
            localStorage.setItem("token", userData.token);
            localStorage.setItem('user_data', JSON.stringify(userData));
            setAuthorizationToken(userData.token);
            dispatch({type: LOGIN_SUCCESS, payload: userData});
            // message.success('You have successfully logged in.')
        }catch (err) {
            dispatch({type:LOGIN_ERROR, payload: err})
        }
    }
};

export const SignOut = () => {
    return (dispatch) => {
        localStorage.removeItem("token");
        setAuthorizationToken(false);
        dispatch({ type: LOGOUT_SUCCESS });
        window.localStorage.clear(); //update the localstorage
        localStorage.removeItem("expirationDate");
        history.push('/login');
    }
};

export const SignUp = (newUser) => {
    return async (dispatch) => {
        dispatch({ type: BEFORE_STATE });
        try {
            await axios.post(`${API_ROUTE}/register`, newUser);
            dispatch({ type: SIGNUP_SUCCESS });
            history.push('/login');
            window.location.reload(true);
        } catch(err) {
            dispatch({ type: SIGNUP_ERROR, payload: err.response.data.error })
        }
    }
};
