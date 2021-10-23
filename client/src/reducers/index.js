import { combineReducers } from 'redux';

import user from './user';
import navigation from './navigation';
import rUser from './regularUser';
import project from './project';
import tasks from './tasks';

export const reducers = combineReducers({ user, navigation, rUser, project, tasks });