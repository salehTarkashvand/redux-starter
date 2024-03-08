/**
 * this code implement with normale redux
 */
// import { legacy_createStore as createStore } from 'redux';
// import reducer from './reducer';

// export default function configureStore() {
//   const devTools =
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__({
//       trace: true,
//       traceLimit: 25,
//     });

//   const store = createStore(reducer, devTools);

//   return store;
// }

/**
 * this code implement with redux-toolkit
 */
import { configureStore } from '@reduxjs/toolkit';
import reducer from './bug/bugs';
export default function () {
  return configureStore({
    reducer,
  });
}
