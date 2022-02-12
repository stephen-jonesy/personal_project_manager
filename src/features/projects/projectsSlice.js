import {  createSlice, current } from '@reduxjs/toolkit';
import { user } from './projectsAPI';


  
export const projectsSlice = createSlice({
    name: 'projects',
    initialState: user.projects,
    reducers: {
        addProject: (state, action) => {
            console.log(current(state))

            const project = {
				projectId: 3,
                projectName: 'second',
                createdAt: '09/02/22 21:59:41',
                isCompleted: false,
                dueDate: '09/03/23 08:41:46',
                priority: action.payload,
                note: null 
			};

			state.push(project);

        },

        removeProject: (state, action) => {

            return state.filter((project) => project.projectId !== action.payload);
        },
    }
});

export const { addProject, removeProject } = projectsSlice.actions;

export default projectsSlice.reducer;


