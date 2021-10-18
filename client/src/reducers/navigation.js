import { USERN, PROJECTSN } from '../constants/actionTypes';

const A = (state = { user : false, projects : false }, action) => {
    switch (action.type) {
    case USERN:
        state = { ...state, user : !state.user};
    return state;   
    case PROJECTSN:
        state = { ...state, projects : !state.projects};
        return state;
    default:
      return state;
  }
};
export default A;