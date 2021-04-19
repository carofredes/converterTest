import CurrencyConstants from './constants';
import { GETEuroLatest, GETCurrencyLatest } from '../../apiCalls/currency';

const CurrencyActionCreators = {
	getEuroLatest: () => async (dispatch, getState) => {
		try {
			const { data: currencyInfo } = await GETEuroLatest();
			dispatch({
				type: CurrencyConstants.UPDATE_CURRENCY,
				payload: currencyInfo
			});
		} catch (error) {
			console.log('error', error.message);
		}
	},
	getCurrencyLatest: (base) => async (dispatch, getState) => {
		try {
			const { data: currencyInfo } = await GETCurrencyLatest(base);

			dispatch({
				type: CurrencyConstants.UPDATE_CURRENCY,
				payload: currencyInfo
			});
		} catch (error) {
			console.log('error', error.message);
		}
	}
};

export default CurrencyActionCreators;
