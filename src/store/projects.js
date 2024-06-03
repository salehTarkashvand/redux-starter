
import { createSlice } from "@reduxjs/toolkit";

let lastid = 0 ;

const slice = createSlice({
    name: "projects",
    initialState : [],
    reducers:{
        projectAdded : (project , Action)=>{
           project.push({
            name : Action.payload.name ,
            id : ++lastid
           })
        }
    }
})


console.log(slice.getInitialState());

export const { projectAdded } = slice.actions
export default slice.reducer