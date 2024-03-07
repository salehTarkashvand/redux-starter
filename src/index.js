
import { bugAdd, bugResolve } from './store/bug/actions';
import store from "./store/configureStore";

const unsubscribe =  store.subscribe(() => {
  console.log(
    store.getState('first bug'),
    'update store!'
  );
})

store.dispatch(bugAdd('first bug'));
setTimeout(() => {
  
})
store.dispatch(bugAdd('first tow'));

unsubscribe()

// store.dispatch(bugRemove(1));
store.dispatch(bugResolve(1));

console.log(store.getState());