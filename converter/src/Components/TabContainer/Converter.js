import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import CurrencyActionCreators from '../../store/currency/actions';
import ConversionResult from './ConversionResult';
import currencyExtraInfo from '../../currencyExtras';

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
			currency: { conversionOptions, rates }
		} = this.props;
		return (
			<MDBContainer>
				<form>
					<MDBRow>
						<MDBCol md='4'>
							<label htmlFor='ammountFromField' className='grey-text font-weight-light'>
								Ammount:
							</label>
							<input
								type='number'
								id='ammountFromField'
								className='form-control'
								value={ammountBase}
								placeholder='Enter ammount'
								required
								onChange={this.updateAmmountBase}
							/>
						</MDBCol>
						<MDBCol md='4'>
							<label htmlFor='fromField' className='grey-text font-weight-light'>
								From
							</label>

							<select
								className='browser-default custom-select'
								id='fromField'
								name='currentBase'
								value={currentBase}
								onChange={this.handleChangeBase}
								placeholder='Choose your option'
							>
								{conversionOptions.map((cOption) => (
									<option key={cOption} value={cOption}>
										{cOption} - {cOption && currencyExtraInfo[cOption].description}
									</option>
								))}
							</select>
						</MDBCol>
						<MDBCol md='4'>
							<label htmlFor='toField' className='grey-text font-weight-light'>
								To
							</label>
							<select
								className='browser-default custom-select'
								id='toField'
								name='conversionBase'
								onChange={this.handleChangeSelect}
								placeholder='Choose your option'
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
						<MDBBtn className='btn' onClick={this.handleConvert} disabled={disableConvert}>
							Convert
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
					/>
				)}
			</MDBContainer>
		);
	}
}

const mapStateToProps = (state) => ({
	currency: state.currency
});

const mapDispatchToProps = (dispatch) => ({
	requestCurrencyLatest: (base) => dispatch(CurrencyActionCreators.getCurrencyLatest(base))
});

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
