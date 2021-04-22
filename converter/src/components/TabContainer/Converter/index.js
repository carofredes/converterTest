import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import { FormattedMessage } from 'react-intl';
import { injectIntl } from 'react-intl';
import CurrencyActionCreators from '../../../store/currency/actions';
import ConversionResult from '../ConversionResult';
import currencyExtraInfo from '../../../currencyExtras';
import ConverterWrapper from './index.style';
import PropTypes from 'prop-types';

class Converter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amountBase: '',
			amountConverted: 0,
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

	updateAmountBase = (e) => {
		const value = e.target.valueAsNumber || '';

		this.setState({ amountBase: value, disableConvert: value < 0 || value === '' });
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

	handleRevertCurrencies = () => {
		const { requestCurrencyLatest } = this.props;

		const { currentBase, conversionBase } = this.state;
		this.setState({
			currentBase: conversionBase,
			conversionBase: currentBase
		});
		requestCurrencyLatest(conversionBase);
	};

	render() {
		const { amountBase, amountConverted, showConversion, currentBase, conversionBase, disableConvert } = this.state;
		const {
			currency: { conversionOptions, rates, date, error },
			intl: { formatMessage }
		} = this.props;

		if (error) {
			return (
				<p className='text-center p-4'>
					<FormattedMessage id='Converter.error' />
				</p>
			);
		}
		return (
			<ConverterWrapper className='p-3 p-lg-5'>
				<form className='d-flex flex-column'>
					<MDBRow>
						<MDBCol md='4' className='mb-3 mb-lg-0'>
							<label htmlFor='amountFromField' className='font-weight-bolder'>
								<FormattedMessage id='Converter.amount' />
							</label>
							<input
								type='number'
								id='amountFromField'
								className='form-control'
								value={amountBase}
								placeholder={formatMessage({
									id: 'Converter.amount.placeholder'
								})}
								required
								onChange={this.updateAmountBase}
							/>
						</MDBCol>

						<MDBCol md='8' className='mb-3 mb-lg-0'>
							<MDBRow>
								<MDBCol size='12' md='5'>
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
								<MDBCol size='12' md='2' className='d-flex align-items-end justify-content-center'>
									<MDBBtn
										size='sm'
										className='m-3 m-md-0 mb-md-2 d-flex justify-content-center'
										outline
										aria-label='Revert currencies'
										onClick={this.handleRevertCurrencies}
									>
										<MDBIcon icon='exchange-alt' />
									</MDBBtn>
								</MDBCol>
								<MDBCol size='12' md='5'>
									<label htmlFor='toField' className='font-weight-bolder'>
										<FormattedMessage id='Converter.to' />
									</label>
									<select
										className='browser-default custom-select'
										id='toField'
										name='conversionBase'
										onChange={this.handleChangeSelect}
										value={conversionBase}
									>
										{conversionOptions.map((cOption) => (
											<option key={cOption} value={cOption}>
												{cOption} - {cOption && currencyExtraInfo[cOption].description}
											</option>
										))}
									</select>
								</MDBCol>
							</MDBRow>
						</MDBCol>
					</MDBRow>
					{!showConversion && (
						<MDBBtn
							color='light-green'
							className='btn-convert mt-5  align-self-end'
							onClick={this.handleConvert}
							disabled={disableConvert}
							aria-label='Convert'
						>
							<FormattedMessage id='Converter.convert' />
						</MDBBtn>
					)}
				</form>
				{showConversion && (
					<ConversionResult
						amountBase={amountBase}
						currentBase={currentBase}
						amountConverted={amountConverted}
						conversionBase={conversionBase}
						rates={rates}
						date={date}
					/>
				)}
			</ConverterWrapper>
		);
	}
}

Converter.propTypes = {
	currency: PropTypes.shape({
		base: PropTypes.string,
		conversionOptions: PropTypes.array,
		rates: PropTypes.shape({ currency: PropTypes.number }),
		date: PropTypes.string
	}).isRequired,
	requestCurrencyLatest: PropTypes.func
};

const mapStateToProps = (state) => ({
	currency: state.currency
});

const mapDispatchToProps = (dispatch) => ({
	requestCurrencyLatest: (base) => dispatch(CurrencyActionCreators.getCurrencyLatest(base))
});

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(Converter));
