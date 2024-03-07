import * as actions from './actionTypes'
export const bugAdd = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    description,
  },
});
export const bugRemove = (id) => ({
  type: actions.BUG_REMOVED,
  payload: {
    id,
  },
});
export const bugResolve = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
});