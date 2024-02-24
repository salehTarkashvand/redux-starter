
import store from "./store";
import { bugAdd, bugRemove, bugResolve } from './actions';

const unsubscribe =  store.subscribe(() => {
  console.log(
    store.getState('first bug'),
    'update store!'
  );
})

store.dispatch(bugAdd('first bug'));
store.dispatch(bugAdd('first tow'));
unsubscribe()

// store.dispatch(bugRemove(1));
store.dispatch(bugResolve(1));

console.log(store.getState());