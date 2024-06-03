import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// const bugUpdated = createAction("bugUpdated")
// console.log(bugUpdated.type);

// dux patern

// actons type

// const BUG_ADDED = "bugAdded"

// actions

// export const bugAdded = createAction("bugAdded")

// reducer

// export default createReducer([],{
//   [bugAdded.type] : (state,action)=>{
//     state.push({
//       description : action.payload.description,
//     })
//   }
// })

//createReducer

// export default createReducer({
//   description : false
// },
// (builder) => {
//   builder
//     .addCase(bugAdded.type , (state , action )=>{
//     state.description = action.payload.description
//   })
//     .addDefaultCase((state, action) => {})

// })

// function reducer(state = [] , action) {
//     console.log();

//     switch (action.type) {
//       case bugAdded.type :
//         return [
//             ...state ,
//             {
//                 description : action.payload.description,
//             }
//         ]

//       default:
//         return state;
//     }
//   }
//   export default reducer;

// createSlice

let lastId = 0 ;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {  
    
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex(bug => bug.id === bugId)
      bugs[index].userId = userId;
    },
    bugAdded: (bugs, action) => {
      bugs.push({
        description: action.payload.description,
        id : ++lastId
      });
    },
  },
});

// console.log(slice);

// selector

export const getUnresolvedBugSelector = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.description)
);
export const getBugAssignedToUser = userId => createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => bug.userId === userId)
);   

export const { bugAdded,bugAssignedToUser} = slice.actions;
export default slice.reducer;
