import { createSlice , createSelector } from '@reduxjs/toolkit';

let lastId = 0;
const slice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUser: (users, action) => {
      users.push({
        id: ++lastId,
        name: action.payload.name,
        bugAssigning: [],
      });
    }
  },
});

export const  { addUser } = slice.actions;

export default slice.reducer