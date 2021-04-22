import CurrencyConstants from './constants';
import { GETEuroLatest, GETCurrencyLatest, GETEuroYesterdayRates, GETYesterdayRates } from '../../apiCalls/currency';

const CurrencyActionCreators = {
	getEuroYesterdayRatess: (currencyInfo) => async (dispatch) => {
		try {
			const { data: currencyYesterdayInfo } = await GETEuroYesterdayRates();
			dispatch({
				type: CurrencyConstants.UPDATE_YESTERDAY_CURRENCY,
				payload: { currencyInfo, currencyYesterdayInfo }
			});
		} catch (error) {
			console.log('error', error.message);
			dispatch({
				type: CurrencyConstants.UPDATE_CURRENCY_FAIL
			});
		}
	},
	getYesterdayCurrencyValue: (base) => async (dispatch) => {
		try {
			const { data: currencyInfo } = await GETCurrencyLatest(base);
			const { data: currencyYesterdayInfo } = await GETYesterdayRates(base);

			dispatch({
				type: CurrencyConstants.UPDATE_YESTERDAY_CURRENCY,
				payload: { currencyInfo, currencyYesterdayInfo }
			});
		} catch (error) {
			console.log('error', error.message);
			dispatch({
				type: CurrencyConstants.UPDATE_CURRENCY_FAIL
			});
		}
	},
	getEuroLatest: () => async (dispatch) => {
		try {
			const { data: currencyInfo } = await GETEuroLatest();

			dispatch({
				type: CurrencyConstants.UPDATE_CURRENCY,
				payload: currencyInfo
			});
			dispatch(CurrencyActionCreators.getEuroYesterdayRatess(currencyInfo));
		} catch (error) {
			console.log('error', error.message);
			dispatch({
				type: CurrencyConstants.UPDATE_CURRENCY_FAIL
			});
		}
	},
	getCurrencyLatest: (base) => async (dispatch) => {
		try {
			const { data: currencyInfo } = await GETCurrencyLatest(base);

			dispatch({
				type: CurrencyConstants.UPDATE_CURRENCY,
				payload: currencyInfo
			});
		} catch (error) {
			console.log('error', error.message);
			dispatch({
				type: CurrencyConstants.UPDATE_CURRENCY_FAIL
			});
		}
	}
};

export default CurrencyActionCreators;
