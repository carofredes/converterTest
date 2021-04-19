import axios from 'axios';
import { baseAddress } from './general';

export function GETCurrencyLatest() {
	return axios({
		url: `${baseAddress}/latest`,
		method: 'GET',
	});
}
