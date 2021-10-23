import { CREATEPROJECT, ALLPROJECTS, PROJECTUPDATE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const createProject = (Data) => async (dispatch) => {
  try {
    const {data} = await api.createProject(Data);
    dispatch({type:CREATEPROJECT, payload: data})
  } catch (error) {
    console.log(error);
  }
};
export const allProjects = () => async (dispatch) =>{
  try {
    const {data} = await api.allProjects();
    dispatch({type: ALLPROJECTS, payload: data})
  } catch (err) {
    console.log(err);
  }
}
export const projectAllocation = (Data,id) => async (dispatch) => {
  try {
    const {data} = await api.allocateProject(Data,id);
    dispatch({type:PROJECTUPDATE, payload: data})
  } catch (err) {
    console.log(err);
  }
}
export const allAllocatedProjects = (id) => async (dispatch) =>{
  try {
    const {data} = await api.allAllocatedProjects(id);
    dispatch({type: ALLPROJECTS, payload: data})

  } catch (err) {
    console.log(err);
  }
}