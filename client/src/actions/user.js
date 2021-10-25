import { SIGNIN, CREATEUSER, ALLREGULARUSER, UPDATEUSER } from '../constants/actionTypes';
import jwt from 'jsonwebtoken';

import * as api from '../api/index';

export const userSignIn = (Data, history) => async (dispatch) => {
    try {
      const {data} = await api.signIn(Data);
      dispatch({ type: SIGNIN, payload: data });
      const temp = jwt.decode(data.token);
      if(temp.userType==='admin')history.push('/admin/projects/allprojects');
        else history.push('/ruser/myprojects');
    } catch (error) {
      console.log(error);
    }
};
export const createRegularUser = (Data) => async (dispatch) => {
  try {
    const {data} = await api.createRegularUser(Data);
    dispatch({type:CREATEUSER, payload: data})
  } catch (error) {
    console.log(error);
  }
};
export const AllRegularUsers = () => async (dispatch) =>{
  try {
    const {data} = await api.allRegularUsers();
    dispatch({type: ALLREGULARUSER, payload: data})
  } catch (err) {
    console.log(err);
  }
}
export const updateUser = (user) => async (dispatch) => {
  try {
    const {data} = await api.updateUser(user);
    dispatch({type:UPDATEUSER, payload: data});
  } catch (err) {
    console.log(err);
  }
}