import { combineReducers } from 'redux';
import ratesReducer from './rates/reducer';

export default combineReducers({
	rates: ratesReducer,
});
