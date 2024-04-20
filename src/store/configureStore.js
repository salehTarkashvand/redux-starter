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
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducers';
import logger from './middleware/logger';
import toast from './middleware/toast';
import func from './middleware/func';
import api from './middleware/api';
export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        logger({ distension: 'console' }),
        toast,
        api
      ]),
  });
}
