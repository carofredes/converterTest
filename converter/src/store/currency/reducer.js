import CurrencyConstants from './constants';

const initialState = {
	base: '',
	date: '',
	conversionOptions: [],
	rates: []
};

const updateCurrencyInfo = (payload, state) => {
	const { rates, base, date } = payload;
	const conversionOptions = Object.keys(rates);
	// This is needed because the API doesnt include the base currency
	// and I prefer to display all possible options on the dropdown
	conversionOptions.push(base);
	return {
		...state,
		base,
		date,
		conversionOptions: conversionOptions.sort(),
		rates
	};
};

const CurrencyReducer = (state, action) => {
	state = state || initialState;

	switch (action.type) {
		case CurrencyConstants.UPDATE_CURRENCY:
			return updateCurrencyInfo(action.payload, state);

		default:
			return state;
	}
};

export default CurrencyReducer;
