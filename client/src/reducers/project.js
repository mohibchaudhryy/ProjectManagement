import { CREATEPROJECT, ALLPROJECTS, PROJECTUPDATE } from '../constants/actionTypes';

const projectsReducer = (state = { projects: [] }, action) => {
    switch (action.type) {
    case CREATEPROJECT:
        state = { ...state, projects: [...state.projects,action.payload] };
        return state;
    case ALLPROJECTS:
      return {...state, projects: [...action.payload]}
    case PROJECTUPDATE:
      return {...state, projects: [...state.projects.map(file=>file._id===action.payload._id?file=action.payload:file)]}
    default:
      return state;
  }
};
export default projectsReducer;