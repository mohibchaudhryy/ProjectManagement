import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const signIn = (formData) => API.post('/user/signin', formData);
export const createRegularUser = (formData) => API.post('/user/createuser', formData);
export const allRegularUsers = () => API.get('/user/allregularusers');

export const createProject = (formData) => API.post('/admin/projects/createproject', formData);
export const allProjects = () => API.get('/admin/projects/allprojects');
export const updateUser = (user) => API.patch('/user/updateuser',user);