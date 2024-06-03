

function createStore(reducer) {
  let state ;
  let listeners = []

  function subscribe(listener){
    listeners.push(listener)
  }

  function dispatch(action) {

    for(let i = 0 ; i < listeners.length ; i++)
    listeners[i]()

    state = reducer(state, action);
  }

  function getState() {
    return state;
  }
  
  return {
    subscribe,
    getState,
    dispatch,
  };
}

export default createStore;
