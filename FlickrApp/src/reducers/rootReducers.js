import {combineReducers} from 'redux';
import pictureReducer from './pictureReducer';
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
    photo:pictureReducer,
    search:searchReducer,
})

export default rootReducer