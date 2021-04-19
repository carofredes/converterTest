import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import CurrencyActionCreators from '../../store/currency/actions';

class Converter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ammountBase: 0,
			ammountConverted: 0,
			currentBase: '',
			conversionBase: '',
			showConversion: false
		};
	}

	componentDidUpdate(prevProps) {
		const {
			currency: { base }
		} = this.props;
		if (base !== prevProps.currency.base) {
			this.setState({ currentBase: base });
		}
	}

	updateAmmountBase = (e) => {
		this.setState({ ammountBase: e.target.value });
	};

	handleChangeSelect = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleConvert = () => {
		const { requestCurrencyValues } = this.props;
		requestCurrencyValues();
		this.setState({ showConversion: true });
	};

	render() {
		const { ammountBase, ammountConverted, showConversion, currentBase } = this.state;
		const {
			currency: { conversionOptions }
		} = this.props;
		console.log(this.props, this.state);
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

							<select
								className='browser-default custom-select'
								id='fromField'
								name='currentBase'
								value={currentBase}
								onChange={this.handleChangeSelect}
							>
								<option>Choose your option</option>
								{conversionOptions.map((cOption) => (
									<option key={cOption} value={cOption}>
										{cOption}
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
							>
								<option>Choose your option</option>
								{conversionOptions.map((cOption) => (
									<option key={cOption} value={cOption}>
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
	currency: state.currency
});

const mapDispatchToProps = (dispatch) => ({
	requestCurrencyValues: () => dispatch(CurrencyActionCreators.getCurrencyLatest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Converter);
