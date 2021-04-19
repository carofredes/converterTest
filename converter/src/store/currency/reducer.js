import CurrencyConstants from './constants';

const initialState = {
	currencyInfo: {},
};

const CurrencyReducer = (state, action) => {
	state = state || initialState;

	switch (action.type) {
		case CurrencyConstants.UPDATE_RATES:
			return {
				...state,
				currencyInfo: action.payload,
			};

		default:
			return state;
	}
};

export default CurrencyReducer;
