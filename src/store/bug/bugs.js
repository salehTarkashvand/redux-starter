import { createAction, createReducer } from '@reduxjs/toolkit';


export const bugAdded = createAction('bugAdded');
export const bugRemoved = createAction('bugRemoved');
export const bugResolved = createAction('bugResolved');


let lastId = 0;
const initialState = [];

export default createReducer([], (builder) => {
  builder
    .addCase(bugAdded, (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    })
    .addCase(bugRemoved, (bugs, action) => {
      return bugs.filter((itemBug) => itemBug.id !== action.payload.id);
    })
    .addCase(bugResolved, (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    })
  .addDefaultCase((bugs, action) =>bugs)
    
})
