import reducer from '../reducer';

function createStore(reducer) {
  let state;
  let listens = [];
  function getState() {
    return state;
  }

  function subScribe(params) {
    listens.push(params);
  }

  function dispatch(action) {
    state = reducer(state, action);

    for (let i = 0; i < listens.length; i++) {
      listens[i]();
    }
  }

  return {
    subScribe,
    getState,
    dispatch,
  };
}

export default createStore(reducer);
