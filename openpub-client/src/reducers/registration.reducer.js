import { userConstants } from '../constants';

export function registration(state = {}, action) {
  switch (action.type) {
    
    case userConstants.SIGNUP_REQUEST:
      return { signup: true };
    
      case userConstants.SIGNUP_SUCCESS:
      return {};
    
      case userConstants.SIGNUP_FAILURE:
      return {};
    
      default:
      return state
  }
}