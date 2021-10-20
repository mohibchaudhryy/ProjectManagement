import { CREATEUSER, ALLREGULARUSER, UPDATEUSER } from '../constants/actionTypes';

const rUserReducer = (state = { rUser: [] }, action) => {
    switch (action.type) {
    case CREATEUSER:
        state = { ...state, rUser: [...state.rUser,action.payload] };
        return state;
    case ALLREGULARUSER:
      return {...state, rUser: [...action.payload]}
    case UPDATEUSER:
      console.log(state.rUser);
      return {...state, rUser: [...state.rUser.map(file=>file._id===action.payload._id?file=action.payload:file)]}
    default:
      return state;
  }
};
export default rUserReducer;