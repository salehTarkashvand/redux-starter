import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const slice = createSlice({
    name:"users" ,
    initialState:[],
    reducers:{
        addUser:(user,action)=>{
            user.push({
                assigned:action.payload.assigned ,
                name : action.payload.name ,
                id : ++lastId
            })
        }
    }
})

// selector 

export const getAssignedUserSelector = createSelector(
    state => state.entities.users ,
    users => users.filter(user => user.assigned)
)


export const {addUser} = slice.actions;
export default slice.reducer ;

