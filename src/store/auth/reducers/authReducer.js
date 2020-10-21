import { SIGNUP_SUCCESS, SIGNUP_ERROR, LOGIN_SUCCESS, LOGIN_ERROR,
    LOGOUT_SUCCESS,UPDATE_USER_SUCCESS, UPDATE_USER_ERROR,
    BEFORE_STATE, BEFORE_USER_STATE,DELETE_USER_SUCCESS, DELETE_USER_ERROR  } from '../actionTypes/index'
import isEmpty from 'lodash/isEmpty';

export const initState = {
    isAuthenticated: false,
    currentUser: {},
    isLoading: false,
    isLoadingAvatar: false,
    isUpdatingUser: false,
    authError: null,
    authSuccess: null
}


const authReducer = (state = initState, action) => {
    switch(action.type) {

        // This is the state to set when the button is click and we are waiting for response
        case BEFORE_STATE:
            return {
                ...state,
                authError: null,
                isLoading: true,
            }
        case BEFORE_USER_STATE:
            return {
                ...state,
                userError: null,
                isUpdatingUser: true,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                signupError: null,
                loginError: null

            }
        case SIGNUP_ERROR:
            return {
                ...state,
                isLoading: false,
                signupError: action.payload,
                loginError: null

            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                currentUser: action.payload,
                isAuthenticated: !isEmpty(action.payload),
                loginError: null,
                signupError: null,

            }
        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                loginError: action.payload,
                signupError: null,

            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                currentUser: {},
                logoutError: null,
                isLoading: false,
                signupError: null,
                loginError: null,
            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isUpdatingUser: false,
                currentUser: action.payload,
                userError: null,
                authSuccessUser: "Details Updated"
            }
        case UPDATE_USER_ERROR:
            return {
                ...state,
                isUpdatingUser: false,
                userError: action.payload
            }
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                currentUser: {},
                isLoading: false,
                authSuccessUser: "User Deleted"
            }
        case DELETE_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                userError: action.payload
            }
        default:
            return state;
    }
}

export default authReducer
