import { CREATETASK, ALLTASKS, UPDATETASK, UPDATECOMPLETIONTASK } from '../constants/actionTypes';


const projectsReducer = (state = { tasks: [] }, action) => {
    switch (action.type) {
    case CREATETASK:
        state = { ...state, tasks: [...state.tasks,action.payload] };
        return state;
    case ALLTASKS:
      return {...state, tasks: [...action.payload]}
    case UPDATETASK:
      return {...state, tasks: [...state.tasks.map(file=>file._id===action.payload._id?file=action.payload:file)]}
      case UPDATECOMPLETIONTASK:
        return {...state, tasks: [...state.tasks.map(file=>file._id===action.payload._id?file=action.payload:file)]}
    default:
      return state;
  }
};
export default projectsReducer;