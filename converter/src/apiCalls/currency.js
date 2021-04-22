import axios from 'axios';
import { baseAddress } from './general';

function getYesterdayDateStr() {
	const today = new Date();
	let yesterday = new Date(today);
	yesterday.setDate(yesterday.getDate() - 1);

	const day = yesterday.getDate();
	const month = yesterday.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
	const year = yesterday.getFullYear();

	return `${year}-${month}-${day}`;
}

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

export function GETEuroYesterdayRates() {
	return axios({
		url: `${baseAddress}/${getYesterdayDateStr()}`,
		method: 'GET'
	});
}
export function GETYesterdayRates(currency) {
	return axios({
		url: `${baseAddress}/${getYesterdayDateStr()}?base=${currency}`,
		method: 'GET'
	});
}
