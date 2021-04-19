import CurrencyConstants from './constants';

const BASE_CURRENCY = 'EUR';
const initialState = {
	base: '',
	date: '',
	conversionOptions: [],
	rates: []
};

const updateCurrencyInfo = (payload, state) => {
	const { rates, base, date } = payload;
	const conversionOptions = Object.keys(rates);
	// This is needed because the API doesnt include EUR currency when using EUR as base
	// and I prefer to display all possible options on the dropdown
	if (base === BASE_CURRENCY) {
		conversionOptions.push(base);
	}
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
