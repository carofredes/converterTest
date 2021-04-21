import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { FormattedMessage } from 'react-intl';
import ResultsWrapper from './index.style';
import currencyExtraInfo from '../../../currencyExtras';
import PropTypes from 'prop-types';

class ConversionResult extends Component {
	calculateConversion = () => {
		const { rates, amountBase, conversionBase } = this.props;

		return amountBase * rates[conversionBase];
	};

	render() {
		const { amountBase, rates, currentBase, conversionBase, date } = this.props;
		return (
			<ResultsWrapper>
				{/* Result Container */}
				<MDBRow className='amount-base mb-3 mb-md-0'>
					<img src={`https://flagcdn.com/24x18/${currentBase && currencyExtraInfo[currentBase].flag}.png`} alt='flag' />
					<p className='m-0 ml-2'>{` ${amountBase || 0} ${
						currencyExtraInfo[currentBase].description || currentBase
					} =`}</p>
				</MDBRow>
				<MDBRow className='amount-converted mb-5'>
					<img
						src={`https://flagcdn.com/48x36/${conversionBase && currencyExtraInfo[conversionBase].flag}.png`}
						alt='flag'
					/>
					<p className='m-0 ml-2'>{` ${this.calculateConversion()} ${
						currencyExtraInfo[conversionBase].description || conversionBase
					}`}</p>
				</MDBRow>
				<MDBRow>
					<MDBCol md='6'>
						<p className='mb-1 text-center text-md-left'>{`1 ${currentBase} = ${rates[conversionBase]} ${conversionBase}`}</p>
					</MDBCol>
					<MDBCol md='6'>
						<p className='mb-1 text-center text-md-right'>
							<FormattedMessage id='Converter.lastUpdate' /> {date}
						</p>
					</MDBCol>
				</MDBRow>
			</ResultsWrapper>
		);
	}
}

ConversionResult.propTypes = {
	amountBase: PropTypes.number,
	rates: PropTypes.shape({ currency: PropTypes.number }).isRequired,
	currentBase: PropTypes.string.isRequired,
	conversionBase: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired
};

export default ConversionResult;
