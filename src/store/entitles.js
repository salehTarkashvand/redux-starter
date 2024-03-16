import { combineReducers } from 'redux';
import bugs from './bug/bugs';
import projects from './projects';
import users from './users';
export default combineReducers({
  bugs,
  projects,
  users,
});
