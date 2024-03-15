import { createSlice } from '@reduxjs/toolkit'

let lastId = 0
const slice = createSlice({
    name:'projects',
    initialState: [],
    reducers: {
        addProject: (projects, action) => {
            projects.push({
              id: ++lastId,
              projectName: action.payload.name,
            });
        }
    }
})

export const { addProject } = slice.actions
console.log(slice);
export default slice.reducer