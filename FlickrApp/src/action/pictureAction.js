import * as types from '../constant/general';
import axios from 'axios';

export const getPictureRequest = () => ({
  type: types.PIC_REQUEST,
});

const getPictureSuccess = (picture) => ({
  type: types.PIC_SUCCESS,
  payload: picture,
});

export const getPictureFailure = (error) => ({
  type: types.PIC_FAILURE,
  error,
});

export const getPictureAction = () => {
  return async (dispatch) => {
    try {
      dispatch(getPictureRequest());
      const res = await axios.get(`https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true`);
      dispatch(getPictureSuccess(res.data.items));   
    } catch (error) {
      console.log('Get Picture Error', error.response.data);
      dispatch(getPictureFailure(error));
    }
  };
};

export const favpic = (fav) => {
  return {
    type: types.PIC_FAV,
    payload: fav,
  };
};

export const savepic = () => {
  return {
    type: types.PIC_SAVE
  };
};

export const delpic = (del) => {
  return {
    type: types.PIC_DEL,
    payload: del
  };
};