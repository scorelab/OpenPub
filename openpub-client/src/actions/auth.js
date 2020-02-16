import axios from 'axios';
//import { setAlert } from './alert';
import {
  //REGISTER_SUCCESS,
  //REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  //LOGIN_SUCCESS,
  //LOGIN_FAIL,
  LOGOUT,
  
} from './types.js';
console.log(USER_LOADED)

// Load User
export const loadUser = () => async dispatch => {
    console.log(USER_LOADED)

  try {
    const res = await axios.get('/api/current_user');
  
    dispatch({
      type: 'USER_LOADED',
      payload: res.data
    });
  } catch (err) {
    dispatch({
        type: 'AUTH_ERROR',
        payload: "Error in loading"
      });
  }
};


// Logout / Clear Profile
export const logout = () => dispatch => {

  dispatch({ type: LOGOUT });
};