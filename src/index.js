import {
  bugAdded,
  bugResolved,
  bugAssigningToUser,
  memoizedUnresolvedBugsSelector,
  unresolvedBugsSelector,
  selectorGetBugsByUser,
  loadBugs,
  addBugs,
  resolvedBugs,
  assigningUserToBug,
} from './store/bug/bugs';
import { addProject } from './store/projects';
import { addUser  } from './store/users';
import configureStore from './store/configureStore';
import * as action from './store/api'
const store = configureStore();


// store.dispatch(
//   action.apiCallBegan({
//     url: '/bugs',
//     method: 'get',
//     onSuccess: 'bugsSlice/bugsReceived',
//     //onError: 'bugsSlice/apiRequestFailed',
//   })
// );
// 
//  store.dispatch(addBugs({ description: 'a' }));

store.dispatch(loadBugs())
setTimeout(() => {
  store.dispatch(resolvedBugs(1));
}, 2000)


store.dispatch(addUser({
  name:'hamed'
}));


setTimeout(() => {
  store.dispatch(
    assigningUserToBug({
      bugId: 4,
      userId: 1,
    })
  );
},3000)

// setTimeout(() => {
//   console.log('456465');
//   store.dispatch(loadBugs());
// }, 300)

// store.dispatch((dispatch, getState) => {
 
//   dispatch({ type: 'bugResived', payload: [1, 2, 3, 4] });
//   dispatch({ type: 'error', payload: {message :'An error occurred'} });
//   console.log(getState());

// });


// store.dispatch(addProject({name:'shoone.ir'}))
// store.dispatch(bugAdded({ description: 'first 1' }));
// store.dispatch(bugAdded({ description: 'first 2' }));
// store.dispatch(bugAdded({ description: 'first 3' }));
// store.dispatch(bugAdded({ description: 'first 4' }));

// unsubscribe()

// store.dispatch(bugRemoved(1));
// store.dispatch(bugResolved({ id: 1712630856694 }));

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