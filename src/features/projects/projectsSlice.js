import {  createSlice, current } from '@reduxjs/toolkit';
import { user } from './projectsAPI';


  
export const projectsSlice = createSlice({
    name: 'projects',
    initialState: user.projects,
    reducers: {
        addProject: (state, action) => {
            
            const {projectName, small_id, dueDate, Priority, createdAt, note} = action.payload;

            const project = {
				projectId: small_id,
                projectName: projectName,
                createdAt: createdAt,
                isComplete: false,
                dueDate: dueDate,
                priority: Priority,
                note: note 
			};

			state.push(project);

        },

        removeProject: (state, action) => {

            return state.filter((project) => project.projectId !== action.payload);
        },

        toggleCompleted: (state, action) => {
            return state.map((project) =>
                project.projectId === action.payload ? {...project, isComplete: !project.isComplete} : project);

        },

        togglePriority: (state, action) => {
            const [id, priority] = action.payload;

            return state.map((project) =>
                project.projectId === id ? {...project, priority: priority} : project);

        },
        updateDueDate: (state, action) => {
            const [id, dueDate] = action.payload;
            return state.map((project) =>
            project.projectId === id ? {...project, dueDate: dueDate} : project);
        },

        updateNote: (state, action) => {
            const [id, note] = action.payload;

            console.log(id, note);

            return state.map((project) =>
            project.projectId === id ? {...project, note: note} : project);

        },

        sortProjects: (state, action) => {
            console.log(action.payload);

            const {show, sortType} = action.payload;

            if(sortType === 'dueDate') {
                const sorted = [...state].sort(function(a, b) {
                    var dateA = new Date(a.dueDate), dateB = new Date(b.dueDate);
                    return dateA - dateB;
                });
    
                console.log(current(state));
    
                return sorted;

            } 
            if(sortType === 'Priority') {
                const sorted = [...state].sort((a, b) => {
                    const sorter = {
                      "None": 0,
                      "Low": 1,
                      "Medium": 2,
                      "High": 3,
                    }
                    return sorter[b.priority] - sorter[a.priority]
                });
    
                console.log(current(state));
    
                return sorted;

            } 
            if(sortType === 'Notes') {
                const sorted = [...state].sort((a, b) => {
                    return a.note.length - b.note.length;

                });
    
                console.log(current(state));
    
                return sorted;

            } 
            
            else {
                const sorted = [...state].sort(function(a, b){
                    if(a[sortType] < b[sortType]) { return -1; }
                    if(a[sortType] > b[sortType]) { return 1; }
                    return 0;
                });
                console.log(current(state));
    
                return sorted;

            }
            
        }
    }
});

export const { addProject, removeProject, toggleCompleted, togglePriority, updateDueDate, updateNote, sortProjects } = projectsSlice.actions;

export default projectsSlice.reducer;


