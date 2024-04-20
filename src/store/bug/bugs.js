import { createSlice, createSelector } from '@reduxjs/toolkit';
import moment from 'moment';
import { apiCallBegan } from '../api';

const initialState = {
  list: [],
  loading: false,
  lastFetch: null,
};
const slice = createSlice({
  name: 'bugsSlice',
  initialState,
  reducers: {
    bugsRequested: (bugs) => {
      bugs.loading = true;
    },
    bugsRequestedFailed: (bugs) => {
      bugs.loading = false;
    },
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },
    bugAssigningToUser: (bugs, action) => {
      const {id:bugId , userId} = action.payload
      const index = bugs.list.findIndex(
        (bug) => bug.id === bugId
      );
      bugs.list[index].userId = userId;
    },
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
    },
    bugRemoved: (bugs, action) => {
      return bugs.list.filter((itemBug) => itemBug.id !== action.payload.id);
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
      bugs.loading = false;
    },
  },
});
export const {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssigningToUser,
  bugsReceived,
  bugsRequested,
  bugsRequestedFailed,
} = slice.actions;

export default slice.reducer;

// action creators
const url = '/bugs';
export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;
  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');
  if (diffInMinutes < 5000) return;

  dispatch(
    apiCallBegan({
      url,
      onStart: bugsRequested.type,
      onSuccess: bugsReceived.type,
      onError: bugsRequestedFailed.type,
    })
  );
};

export const resolvedBugs = (id) =>
  apiCallBegan({
    url: url + '/' + id,
    onStart: bugsRequested.type,
    onSuccess: bugResolved.type,
    data: {
      resolved: true,
    },
    method: 'patch',
  });

export const assigningUserToBug = ({ bugId, userId }) =>
  apiCallBegan({
    url: url + '/' + bugId,
    onSuccess: bugAssigningToUser.type,
    method: 'patch',
    data: {
      userId,
    },
  });

export const addBugs = (bug) =>
  apiCallBegan({
    url,
    method: 'post',
    data: bug,
    onSuccess: bugAdded.type,
  });

export const unresolvedBugsSelector = (state) => {
  return state.entities.bugs.list.filter((bug) => !bug.resolved);
};

export const memoizedUnresolvedBugsSelector = createSelector(
  (state) => state.entities.bugs,
  (bugs) => {
    return bugs.list.filter((bug) => !bug.resolved);
  }
);

export const selectorGetBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs.list,
    (bugs) => {
      return bugs.filter((bug) => bug.userId === userId);
    }
  );
