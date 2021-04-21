import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { FormattedMessage } from 'react-intl';
import { injectIntl } from 'react-intl';
import CurrencyActionCreators from '../../store/currency/actions';
import ConversionResult from './ConversionResult';
import currencyExtraInfo from '../../currencyExtras';
import ConverterWrapper from './Converter.style';

class Converter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ammountBase: '',
			ammountConverted: 0,
			currentBase: '',
			conversionBase: '',
			showConversion: false,
			disableConvert: true
		};
	}

	componentDidUpdate(prevProps) {
		const {
			currency: { base, conversionOptions }
		} = this.props;
		if (base !== prevProps.currency.base) {
			this.setState({ currentBase: base });
			if (this.state.conversionBase === '') {
				this.setState({ conversionBase: conversionOptions[0] });
			}
		}
	}

	updateAmmountBase = (e) => {
		const value = e.target.valueAsNumber || '';

		this.setState({ ammountBase: value, disableConvert: value < 0 || value === '' });
	};

	handleChangeBase = (e) => {
		const { requestCurrencyLatest } = this.props;
		const { value } = e.target;
		this.setState({
			currentBase: value
		});
		requestCurrencyLatest(value);
	};

	/**
	 *
	 * I could had only this method to control both selects
	 * but as I need to call another function when the base changes,
	 * I prefered to add another method specific for that
	 */
	handleChangeSelect = (e) => {
		const { name, value } = e.target;

		this.setState({
			[name]: value
		});
	};

	handleConvert = () => {
		this.setState({ showConversion: true });
	};

	render() {
		const { ammountBase, ammountConverted, showConversion, currentBase, conversionBase, disableConvert } = this.state;
		const {
			currency: { conversionOptions, rates, date },
			intl: { formatMessage }
		} = this.props;

		return (
			<ConverterWrapper className='p-3 p-lg-5'>
				<form className='d-flex flex-column'>
					<MDBRow>
						<MDBCol md='4' className='mb-3 mb-lg-0'>
							<label htmlFor='ammountFromField' className='font-weight-bolder'>
								<FormattedMessage id='Converter.ammount' />
							</label>
							<input
								type='number'
								id='ammountFromField'
								className='form-control'
								value={ammountBase}
								placeholder={formatMessage({
									id: 'Converter.ammount.placeholder'
								})}
								required
								onChange={this.updateAmmountBase}
							/>
						</MDBCol>
						<MDBCol md='4' className='mb-3 mb-lg-0'>
							<label htmlFor='fromField' className='font-weight-bolder'>
								<FormattedMessage id='Converter.from' />
							</label>

							<select
								className='browser-default custom-select'
								id='fromField'
								name='currentBase'
								value={currentBase}
								onChange={this.handleChangeBase}
							>
								{conversionOptions.map((cOption) => (
									<option key={cOption} value={cOption}>
										{cOption} - {cOption && currencyExtraInfo[cOption].description}
									</option>
								))}
							</select>
						</MDBCol>
						<MDBCol md='4'>
							<label htmlFor='toField' className='font-weight-bolder'>
								<FormattedMessage id='Converter.to' />
							</label>
							<select
								className='browser-default custom-select'
								id='toField'
								name='conversionBase'
								onChange={this.handleChangeSelect}
							>
								{conversionOptions.map((cOption) => (
									<option key={cOption} value={cOption}>
										{cOption} - {cOption && currencyExtraInfo[cOption].description}
									</option>
								))}
							</select>
						</MDBCol>
					</MDBRow>
					{!showConversion && (
						<MDBBtn
							color='light-green'
							className='btn-convert mt-5  align-self-end'
							onClick={this.handleConvert}
							disabled={disableConvert}
						>
							<FormattedMessage id='Converter.convert' />
						</MDBBtn>
					)}
				</form>
				{showConversion && (
					<ConversionResult
						ammountBase={ammountBase}
						currentBase={currentBase}
						ammountConverted={ammountConverted}
						conversionBase={conversionBase}
						rates={rates}
						date={date}
					/>
				)}
			</ConverterWrapper>
		);
	}
}

const mapStateToProps = (state) => ({
	currency: state.currency
});

const mapDispatchToProps = (dispatch) => ({
	requestCurrencyLatest: (base) => dispatch(CurrencyActionCreators.getCurrencyLatest(base))
});

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Converter));
