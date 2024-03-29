import {
  bugAdded,
  bugResolved,
  bugAssigningToUser,
  memoizedUnresolvedBugsSelector,
  unresolvedBugsSelector,
  selectorGetBugsByUser
} from './store/bug/bugs';
import { addProject } from './store/projects';
import { addUser  } from './store/users';
import configureStore from './store/configureStore';

const store = configureStore();



store.dispatch((dispatch, getState) => {
 
  dispatch({ type: 'bugResived', payload: [1, 2, 3, 4] });
  dispatch({ type: 'error', payload: {message :'An error occurred'} });
  console.log(getState());

});


// store.dispatch(addProject({name:'shoone.ir'}))
// store.dispatch(bugAdded({ description: 'first 1' }));
// store.dispatch(bugAdded({ description: 'first 2' }));
// store.dispatch(bugAdded({ description: 'first 3' }));
// store.dispatch(bugAdded({ description: 'first 4' }));

// unsubscribe()

// store.dispatch(bugRemoved(1));
//store.dispatch(bugResolved({ id: 1 }));

const unresolvedBugs1 = unresolvedBugsSelector(store.getState());

const unresolvedBugs2 = unresolvedBugsSelector(store.getState());
const memoizedunresolvedBugs1 = memoizedUnresolvedBugsSelector(store.getState());
const memoizedunresolvedBugs2 = memoizedUnresolvedBugsSelector(store.getState());

// store.dispatch(addUser({
//   name:'hamed'
// }));
// store.dispatch(addUser({
//   name:'saleh'
// }));
// store.dispatch(addUser({
//   name:'maman'
// }));

// store.dispatch(
//   bugAssigningToUser({
//     userId: 1,
//     bugId: 1,
//   })
// );
// store.dispatch(
//   bugAssigningToUser({
//     userId: 1,
//     bugId: 3,
//   })
// );
// store.dispatch(
//   bugAssigningToUser({
//     userId: 1,
//     bugId: 4,
//   })
// );

console.log(selectorGetBugsByUser(1)(store.getState()));