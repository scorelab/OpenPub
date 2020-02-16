import {
   // REGISTER_SUCCESS,
    //REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    //LOGIN_SUCCESS,
    //LOGIN_FAIL,
    LOGOUT,
   
  } from '../actions/types';
  
  const initialState = {
   
    isAuthenticated: null,
    loading: true,
    user: null
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload
        };
     
      case AUTH_ERROR:
          return {
              ...state,
              user: 'Harsha you failed'
          }  
      
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          ...state,
         
          isAuthenticated: false,
          loading: false
        };
      default:
        return state;
    }
  }