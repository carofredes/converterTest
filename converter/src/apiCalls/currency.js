import axios from 'axios';
import { baseAddress } from './general';

export function GETEuroLatest() {
	return axios({
		url: `${baseAddress}/latest`,
		method: 'GET'
	});
}

export function GETCurrencyLatest(currency) {
	return axios({
		url: `${baseAddress}/latest?base=${currency} `,
		method: 'GET'
	});
}
