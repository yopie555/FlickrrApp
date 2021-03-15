import { act } from 'react-test-renderer';
import * as types from '../constant/general';

const initialState = {
  loading: false,
  result: [],
  fav: [],
  error: null
}

export default pictureReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PIC_REQUEST:
      return { ...state, loading: true, result: [], title: "", error: null };
    case types.PIC_SUCCESS:
      return { ...state, loading: false, result: action.payload };
    case types.PIC_FAV:
      return { ...state, loading: false, fav: [...state.fav, action.payload] };
    case types.PIC_SAVE:
      return { ...state, loading: false, fav: [] };
    case types.PIC_FAILURE:
      return { ...state, loading: false, result: [], error: action.payload };
    case types.PIC_DEL:
      return {...state, loading : false, fav: [...state.fav.filter(e => e.media.m != action.payload.media.m)]}
    default:
      return state;
  }
}

