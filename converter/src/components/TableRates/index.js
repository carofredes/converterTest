import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { MDBCol, MDBRow, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { FormattedMessage } from 'react-intl';
import TableContainerWrapper from './index.style';
import CurrencyActionCreators from '../../store/currency/actions';
import currencyExtraInfo from '../../currencyExtras';
import PropTypes from 'prop-types';

class TableRates extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentBase: 'EUR'
		};
	}

	handleChangeBase = (e) => {
		const { requestYesterdayCurrencyValue } = this.props;
		const { value } = e.target;
		this.setState({
			currentBase: value
		});
		requestYesterdayCurrencyValue(value);
	};

	render() {
		const {
			currencyInfo: { yesterdayValues, conversionOptions }
		} = this.props;
		const { currentBase } = this.state;
		return (
			<TableContainerWrapper>
				<h3 className='mb-4'>
					<FormattedMessage id='TableRates.title' />
				</h3>
				<MDBRow className='justify-content-center align-items-center mb-3'>
					<MDBCol size='12' md='3'>
						<label htmlFor='currentBaseField' className='font-weight-bolder'>
							<FormattedMessage id='TableRates.select.base' />
						</label>
					</MDBCol>
					<MDBCol size='12' md='3'>
						<select
							className='browser-default custom-select'
							id='currentBaseField'
							name='currentBaseField'
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
				</MDBRow>
				<MDBTable hover>
					<MDBTableHead>
						<tr>
							<th className='text-left'>
								<FormattedMessage id='TableRates.th.currency' />
							</th>
							<th>
								<FormattedMessage id='TableRates.th.conversion' />
							</th>
							<th className='text-right'>
								<FormattedMessage id='TableRates.th.change' />
							</th>
						</tr>
					</MDBTableHead>
					<MDBTableBody>
						{yesterdayValues.map((currency) => {
							if (currency.currency !== currentBase) {
								return (
									<tr key={currency.currency}>
										<td className='text-left'>
											<img
												src={`https://flagcdn.com/24x18/${
													currency.currency && currencyExtraInfo[currency.currency].flag
												}.png`}
												alt='flag'
											/>{' '}
											{currencyExtraInfo[currency.currency].description}
										</td>
										<td>{currency.rate}</td>
										<td className={currency.rateChange < 0 ? 'change-negative text-right' : 'text-right'}>
											{currency.rateChange}%
										</td>
									</tr>
								);
							} else return <Fragment key='empty'></Fragment>;
						})}
					</MDBTableBody>
				</MDBTable>
			</TableContainerWrapper>
		);
	}
}

TableRates.propTypes = {
	currencyInfo: PropTypes.shape({
		base: PropTypes.string,
		conversionOptions: PropTypes.array,
		rates: PropTypes.shape({ currency: PropTypes.number }),
		date: PropTypes.string,
		yesterdayValues: PropTypes.array
	}).isRequired,
	requestYesterdayCurrencyValue: PropTypes.func
};

const mapStateToProps = (state) => ({
	currencyInfo: state.currency
});

const mapDispatchToProps = (dispatch) => ({
	requestYesterdayCurrencyValue: (base) => dispatch(CurrencyActionCreators.getYesterdayCurrencyValue(base))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableRates);
