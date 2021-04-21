import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { ConverterComponent } from './index';
import ConverterWrapper from './index.style';

describe('<Convert />', () => {
	const requiredProps = {
		currency: { conversionOptions: [], rates: [], date: '', base: 'EUR', error: false }
	};
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<ConverterComponent {...requiredProps} />);
	});

	it('Should render <Convert/> when receiving all required props', () => {
		expect(wrapper.find(ConverterWrapper)).toHaveLength(1);
	});

	it('Should have one input and 2 select', () => {
		expect(wrapper.find('input')).toHaveLength(1);
		expect(wrapper.find('select')).toHaveLength(2);
	});

	it('Input should allow numbers', () => {
		expect(wrapper.find('input#ammountFromField').prop('value')).toBe('');
		wrapper.find('input#ammountFromField').simulate('change', { target: { value: 2, valueAsNumber: 2 } });
		expect(wrapper.find('input#ammountFromField').prop('value')).toBe(2);
	});

	it('Input should allow decimal numbers', () => {
		expect(wrapper.find('input#ammountFromField').prop('value')).toBe('');
		wrapper.find('input#ammountFromField').simulate('change', { target: { value: 2.2, valueAsNumber: 2.2 } });
		expect(wrapper.find('input#ammountFromField').prop('value')).toBe(2.2);
	});

	it('Input shouldnt allow letters', () => {
		expect(wrapper.find('input#ammountFromField').prop('value')).toBe('');
		wrapper.find('input#ammountFromField').simulate('change', { target: { value: '2.2' } });
		expect(wrapper.find('input#ammountFromField').prop('value')).toBe('');
	});
});
