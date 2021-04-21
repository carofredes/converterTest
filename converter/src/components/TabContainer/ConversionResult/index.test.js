import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import ConversionResult from './index';
import ResultsWrapper from './index.style';

describe('<ConversionResult />', () => {
	const requiredProps = {
		rates: { USD: 0.8 },
		currentBase: 'EUR',
		conversionBase: 'USD',
		date: ''
	};
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<ConversionResult {...requiredProps} />);
	});

	it('should render <ConversionResult /> when receiving all required props', () => {
		expect(wrapper.find(ResultsWrapper)).toHaveLength(1);
	});

	it('should render <ConversionResult /> when receiving all props', () => {
		wrapper.setProps({
			...requiredProps,
			amountBase: 1
		});
		expect(wrapper.find(ResultsWrapper)).toHaveLength(1);
	});

	it('should contain Euro flag and US flag', () => {
		expect(wrapper.find('img').at(0).prop('src')).toEqual('https://www.countryflags.io/EU/flat/24.png');
		expect(wrapper.find('img').at(1).prop('src')).toEqual('https://www.countryflags.io/US/flat/48.png');
	});
});
describe('<ConversionResult /> Test conversion functionality', () => {
	const props = {
		amountBase: 1,
		rates: { USD: 0.8 },
		currentBase: 'EUR',
		conversionBase: 'USD',
		date: ''
	};
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<ConversionResult {...props} />);
	});

	it('should use the amount 1 for the calculation result', () => {
		expect(wrapper.find('.amount-base p').text()).toEqual(' 1 Euro =');
	});

	it('should calculate the conversion and display 0.8', () => {
		expect(wrapper.find('.amount-converted p').text()).toEqual(' 0.8 United States dollar');
	});
});
