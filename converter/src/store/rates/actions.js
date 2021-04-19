import RatesConstants from './constants';

const RatesActionCreators = {
	getRates: (ratesInfo) => async (dispatch, getState) => {
		dispatch({
			type: RatesConstants.GET_RATES,
			ratesInfo,
		});
	},
};

export default RatesActionCreators;
