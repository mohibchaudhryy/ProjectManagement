import { combineReducers } from 'redux';

import user from './user';
import navigation from './navigation';

export const reducers = combineReducers({ user, navigation });