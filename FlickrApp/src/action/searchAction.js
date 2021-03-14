import * as types from '../constant/general';
import axios from 'axios';

export const getSearchRequest = () => ({
  type: types.SEARCH_REQUEST,
});

const getSearchSuccess = (search) => ({
  type: types.SEARCH_SUCCESS,
  payload: search,
});

export const getSearchFailure = (error) => ({
  type: types.SEARCH_FAILURE,
  error,
});

export const searchImageAction = (value) => {
  console.log('value', value);
  
  return async (dispatch) => {
    try {
      dispatch(getSearchRequest());
      const res = await axios.get(`http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tag=${value}`);
      console.log('ini res search', res.data.items);
      dispatch(getSearchSuccess(res.data.items));
    } catch (error) {
      console.log('Get Picture Error', error.response.data);
      dispatch(getSearchFailure(error));
    }
  };
};
