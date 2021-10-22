import { CREATETASK, ALLTASKS, UPDATETASK, UPDATECOMPLETIONTASK } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const createTask = (Data) => async (dispatch) => {
  try {
    const {data} = await api.createTask(Data);
    dispatch({type:CREATETASK, payload: data})
  } catch (error) {
    console.log(error);
  }
};
export const allTasks = () => async (dispatch) =>{
  try {
    const {data} = await api.allTasks();
    dispatch({type: ALLTASKS, payload: data})
  } catch (err) {
    console.log(err);
  }
}
export const updateTask = (file) => async (dispatch) => {
  try {
    const {data} = await api.updateTask(file);
    dispatch({type:UPDATETASK, payload: data})
  } catch (error) {
    console.log(error);
  }
};
export const updateCompletionTask = (id) => async (dispatch) => {
    try {
      const {data} = await api.updateCompleteTask(id);
      dispatch({type:UPDATECOMPLETIONTASK, payload: data})
    } catch (error) {
      console.log(error);
    }
  };