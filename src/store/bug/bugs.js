import { createSlice, createSelector } from '@reduxjs/toolkit';

let lastId = 0;
const initialState = [];
const slice = createSlice({
  name: 'bugsSlice',
  initialState: [],
  reducers: {
    bugAssigningToUser: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.userId);
      bugs[index].userId = action.payload.userId;
    },
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugRemoved: (bugs, action) => {
      return bugs.filter((itemBug) => itemBug.id !== action.payload.id);
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
  },
});
export const { bugAdded, bugRemoved, bugResolved, bugAssigningToUser } =
  slice.actions;

export default slice.reducer;

export const unresolvedBugsSelector = (state) => {
  return state.entities.bugs.filter((bug) => !bug.resolved);
};

export const memoizedUnresolvedBugsSelector = createSelector(
  (state) => state.entities.bugs,
  (bugs) => {
    return bugs.filter((bug) => !bug.resolved);
  }
);

export const selectorGetBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => {
      return bugs.filter((bug) => bug.userId === userId);
    }
  );
