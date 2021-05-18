import {combineReducers} from 'redux';
import SlotsReducer from "./SlotsReducer";
export default combineReducers({
    slots:SlotsReducer
});