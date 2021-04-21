import CurrencyConstants from './constants';

const BASE_CURRENCY = 'EUR';
const initialState = {
	base: '',
	date: '',
	conversionOptions: [],
	rates: [],
	error: false
};

const updateCurrencyInfo = (payload, state) => {
	const { rates, base, date } = payload;
	// This is needed because the API doesnt include EUR currency when using EUR as base
	// and it will break the app when comparing EUR with EUR
	if (base === BASE_CURRENCY) {
		rates['EUR'] = 1;
	}
	const conversionOptions = Object.keys(rates);
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
		case CurrencyConstants.UPDATE_CURRENCY_FAIL:
			return { ...state, error: true };

		default:
			return state;
	}
};

export default CurrencyReducer;
