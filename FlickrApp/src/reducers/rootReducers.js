import {combineReducers} from 'redux';
import pictureReducer from './pictureReducer';
import searchReducer from './searchReducer'

const rootReducer = combineReducers({
    picture:pictureReducer,
    search:searchReducer,
})

export default rootReducer