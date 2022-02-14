import {  createSlice, current } from '@reduxjs/toolkit';
import { user } from './projectsAPI';


  
export const projectsSlice = createSlice({
    name: 'projects',
    initialState: user.projects,
    reducers: {
        addProject: (state, action) => {
            console.log(current(state))
            const {projectName, small_id, Priority, createdAt} = action.payload;
            console.log(action.payload);

            const project = {
				projectId: small_id,
                projectName: projectName,
                createdAt: createdAt,
                isComplete: false,
                dueDate: '09/03/23 08:41:46',
                priority: Priority,
                note: null 
			};

			state.push(project);

        },

        removeProject: (state, action) => {

            return state.filter((project) => project.projectId !== action.payload);
        },

        toggleCompleted: (state, action) => {
            console.log(action.payload);
            return state.map((project) =>
                project.projectId === action.payload ? {...project, isComplete: !project.isComplete} : project
            )

        }
    }
});

export const { addProject, removeProject, toggleCompleted } = projectsSlice.actions;

export default projectsSlice.reducer;


