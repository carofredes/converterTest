import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import RatesActionCreators from '../../store/currency/actions';

class Converter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ammountBase: 0,
			ammountConverted: 0,
			showConversion: false,
			conversionOptions: ['GBP', 'USD'],
		};
	}
	handleConvert = () => {
		const { requestCurrencyValues } = this.props;
		requestCurrencyValues();
		this.setState({ showConversion: true });
	};

	updateAmmountBase = (e) => {
		this.setState({ ammountBase: e.target.value });
	};

	render() {
		const { ammountBase, ammountConverted, showConversion, conversionOptions } = this.state;
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
								onChange={this.updateAmmountBase}
							/>
						</MDBCol>
						<MDBCol md='4'>
							<label htmlFor='fromField' className='grey-text font-weight-light'>
								From
							</label>

							<select className='browser-default custom-select' id='fromField'>
								<option>Choose your option</option>
								{conversionOptions.map((cOption) => (
									<option key={cOption} value='1'>
										{cOption}
									</option>
								))}
							</select>
						</MDBCol>
						<MDBCol md='4'>
							<label htmlFor='toField' className='grey-text font-weight-light'>
								To
							</label>
							<select className='browser-default custom-select' id='toField'>
								<option>Choose your option</option>
								{conversionOptions.map((cOption) => (
									<option key={cOption} value='1'>
										{cOption}
									</option>
								))}
							</select>
						</MDBCol>
					</MDBRow>
					<MDBBtn className='btn' onClick={this.handleConvert}>
						Convert
					</MDBBtn>
				</form>
				{showConversion && (
					<MDBRow>
						<p>
							conversion {ammountBase} - {ammountConverted}
						</p>
					</MDBRow>
				)}
			</MDBContainer>
		);
	}
}

const mapStateToProps = (state) => ({
	currencyInfo: state.currency,
});

const mapDispatchToProps = (dispatch) => ({
	requestCurrencyValues: () => dispatch(RatesActionCreators.getCurrencyLatest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
