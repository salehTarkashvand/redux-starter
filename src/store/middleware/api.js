import axios from 'axios';
import * as actionType from './../api';

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actionType.apiCallBegan.type) return next(action);

    const { url, method, onSuccess, onError, onStart, data } = action.payload;

    if (onStart) dispatch({ type: onStart });
    next(action);
    try {
      const response = await axios.request({
        baseURL: 'http://localhost:9001/api',
        url,
        method,
        data,
      });

      dispatch(actionType.apiCallSuccess(response.data));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch(actionType.apiCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
