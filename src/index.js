import { bugAdded, bugRemoved, bugResolved } from './store/bug/bugs';
import configureStore from './store/configureStore';
import { addProject } from './store/projects';

const store = configureStore();

store.dispatch(addProject({name:'shoone.ir'}))

const unsubscribe =  store.subscribe(() => {
  console.log(
    store.getState('first bug'),
    'update store!'
  );
})

store.dispatch(bugAdded({ description: 'first bugddd' }));

store.dispatch(bugAdded({ description: 'first bug' }));

// unsubscribe()

// store.dispatch(bugRemoved(1));
store.dispatch(bugResolved({ id: 1 }));

console.log(store.getState());

