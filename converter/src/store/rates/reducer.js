import RatesConstants from './constants';

const initialState = {
	ratesValues: 'hola',
};

const RatesReducer = (state, action) => {
	state = state || initialState;

	switch (action.type) {
		case RatesConstants.GET_RATES:
			return {
				...state,
				rates: action.payload,
			};

		default:
			return state;
	}
};

export default RatesReducer;
