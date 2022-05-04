import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from '../features/projects/projectsSlice';
import usersSlice from '../features/user/userSlice';


export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    user: usersSlice,

  },
});
