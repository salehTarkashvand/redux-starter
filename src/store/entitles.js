import { combineReducers } from 'redux';
import bugs from './bug/bugs';
import projects from './projects';
export default combineReducers({
  bugs,
  projects,
});
