import { SIGNIN, LOGOUT } from '../constants/actionTypes';

const userReducer = (state = { user: '' }, action) => {
    switch (action.type) {
    case SIGNIN:
        localStorage.setItem("token", JSON.stringify( action.payload.token))
        state = { ...state, user: action.payload };
        return state;
    case LOGOUT:
      localStorage.clear();
      return {...state, user:null}
    default:
      return state;
  }
};
export default userReducer;