import { bugAdded, bugRemoved, bugResolved } from './store/bug/bugs';
import configureStore from './store/configureStore';

const store = configureStore();
// const unsubscribe =  store.subscribe(() => {
//   console.log(
//     store.getState('first bug'),
//     'update store!'
//   );
// })

store.dispatch(bugAdded({ description: 'first bug' }));

store.dispatch(bugAdded({ description: 'first bug' }));

// unsubscribe()

// store.dispatch(bugRemoved(1));
store.dispatch(bugResolved({ id: 1 }));

console.log(store.getState());

const p1 = Promise.resolve(3);
const p5 = Promise.reject(5);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

const promises = [p3, p5, p1];


const filter = promises.map((promise) =>
  promise.then(
    (value) => ({ s5tatus: 'fulfilled', value }),
    (reason) => ({ status: 'rejected', reason })
  )
);
Promise.allSettled(promises).then(value=>console.log(value))

Promise.all(filter)
  .then((values) => {
    console.log(values); // [3, 1337, "foo"]
  })
  .catch((e) => console.log(e));
