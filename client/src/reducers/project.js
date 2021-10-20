import { CREATEPROJECT, ALLPROJECTS } from '../constants/actionTypes';

const projectsReducer = (state = { projects: [] }, action) => {
    switch (action.type) {
    case CREATEPROJECT:
        state = { ...state, projects: [...state.projects,action.payload] };
        return state;
    case ALLPROJECTS:
      return {...state, projects: [...action.payload]}
    default:
      return state;
  }
};
export default projectsReducer;