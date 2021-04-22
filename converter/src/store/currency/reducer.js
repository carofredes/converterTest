import CurrencyConstants from './constants';

const BASE_CURRENCY = 'EUR';
const initialState = {
	base: '',
	date: '',
	conversionOptions: [],
	rates: {},
	error: false,
	yesterdayValues: []
};

const calculateRateDifference = (yr = 0, r = 0) => {
	return (100 - (yr * 100) / r).toFixed(4);
};

const updateYesterdayCurrencyInfo = (payload, state) => {
	const {
		currencyInfo: { rates },
		currencyYesterdayInfo: { rates: yestRates, base }
	} = payload;
	// This is needed because the API doesnt include EUR currency when using EUR as base
	if (base === BASE_CURRENCY) {
		yestRates['EUR'] = 1;
	}

	const ratesKeys = Object.keys(rates);
	const ratesValues = ratesKeys.map((rate) => ({
		currency: rate,
		rate: rates[rate].toFixed(4),
		yesterday: yestRates[rate].toFixed(4),
		rateChange: calculateRateDifference(yestRates[rate], rates[rate])
	}));

	return {
		...state,
		yesterdayValues: ratesValues
	};
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
		case CurrencyConstants.UPDATE_YESTERDAY_CURRENCY:
			return updateYesterdayCurrencyInfo(action.payload, state);
		case CurrencyConstants.UPDATE_YESTERDAY_CURRENCY_FAIL:
			return { ...state, error: true };

		default:
			return state;
	}
};

export default CurrencyReducer;
