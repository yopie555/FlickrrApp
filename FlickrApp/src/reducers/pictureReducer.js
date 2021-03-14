import * as types from '../constant/general';

const initialState = {
  loading:false,
  result: [],
  error:null
}

export default pictureReducer = (state = initialState, action) => {
  switch(action.type){
    case types.PIC_REQUEST:
      return {loading:true, result:[], title:"", error:null};
    case types.PIC_SUCCESS:
      return {...state, loading:false, result: action.payload};
    case types.PIC_FAILURE:
      return {...state, loading:false, result: [], error: action.payload};
    default:
      return state;
  }
}