import { SIGNIN } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const userSignIn = (Data, history) => async (dispatch) => {
    try {
      const {data} = await api.signIn(Data);
      dispatch({ type: SIGNIN, payload: data });
      history.push('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };