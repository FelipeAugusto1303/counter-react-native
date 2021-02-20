import {combineReducers} from 'redux';
import CountReducer from './CountReducer'

const AllReducers = combineReducers({
        count: CountReducer,
})

export default AllReducers;