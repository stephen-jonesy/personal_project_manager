import {  createSlice, current } from '@reduxjs/toolkit';
import { user } from './projectsAPI';


  
export const projectsSlice = createSlice({
    name: 'projects',
    initialState: user.projects,
    reducers: {
        addProject: (state, action) => {
            
            const {projectName, small_id, Priority, createdAt, note} = action.payload;
            console.log(action.payload);

            const project = {
				projectId: small_id,
                projectName: projectName,
                createdAt: createdAt,
                isComplete: false,
                dueDate: '09/03/23 08:41:46',
                priority: Priority,
                note: note 
			};

			state.push(project);
            console.log(current(state))

        },

        removeProject: (state, action) => {

            return state.filter((project) => project.projectId !== action.payload);
        },

        toggleCompleted: (state, action) => {
            return state.map((project) =>
                project.projectId === action.payload ? {...project, isComplete: !project.isComplete} : project
            );

        },

        togglePriority: (state, action) => {
            const [id, priority] = action.payload;

            return state.map((project) =>
                project.projectId === id ? {...project, priority: priority} : project
            );

        },

        updateNote: (state, action) => {
            const [id, note] = action.payload;

            console.log(id, note);

            return state.map((project) =>
            project.projectId === id ? {...project, note: note} : project
            );

        }
    }
});

export const { addProject, removeProject, toggleCompleted, togglePriority, updateNote } = projectsSlice.actions;

export default projectsSlice.reducer;


