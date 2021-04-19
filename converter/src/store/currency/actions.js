import CurrencyConstants from './constants';
import { GETCurrencyLatest } from '../../apiCalls/currency';

const CurrencyActionCreators = {
	getCurrencyLatest: () => async (dispatch, getState) => {
		try {
			const { data: currencyInfo } = await GETCurrencyLatest();
			dispatch({
				type: CurrencyConstants.UPDATE_CURRENCY,
				payload: currencyInfo,
			});
			console.log('currencyInfo', currencyInfo);
		} catch (error) {
			console.log('error', error.message);
		}
	},
};

export default CurrencyActionCreators;
