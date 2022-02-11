import {  createSlice, current } from '@reduxjs/toolkit';
import { user } from './projectsAPI';



export const projectsSlice = createSlice({
    name: 'projects',
    initialState: user.projects,
    reducers: {
        removeProject: (state, action) => {
            // state.projects.filter(item => item.projectId !== action.payload)
            // const project = {
			// 	projectId: 3,
            //     projectName: 'second',
            //     createdAt: '09/02/22 21:59:41',
            //     isCompleted: false,
            //     dueDate: '09/03/23 08:41:46',
            //     priority: action.payload,
            //     note: null 
			// };

			// state.push(project);
            // console.log(current(state))
            // console.log(action.payload)

            return state.filter((project) => project.projectId !== action.payload);
        },
    }
});

export const { removeProject } = projectsSlice.actions;

export const selectProjects = (state) => state.projects;

export default projectsSlice.reducer;


