import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import ResultsWrapper from './ConversionResult.style';
import currencyExtraInfo from '../../currencyExtras';

class ConversionResult extends Component {
	calculateConversion = () => {
		const { rates, ammountBase, conversionBase } = this.props;

		return ammountBase * rates[conversionBase];
	};

	render() {
		const { ammountBase, rates, currentBase, conversionBase, date } = this.props;
		return (
			<ResultsWrapper>
				{/* Result Container */}
				<MDBRow className='ammount-base'>
					<img
						src={`https://www.countryflags.io/${currentBase && currencyExtraInfo[currentBase].flag}/flat/24.png`}
						alt='flag'
					/>
					<p className='m-0 ml-2'>{` ${ammountBase || 0} ${
						currencyExtraInfo[currentBase].description || currentBase
					} =`}</p>
				</MDBRow>
				<MDBRow className='ammount-converted mb-5'>
					<img
						src={`https://www.countryflags.io/${conversionBase && currencyExtraInfo[conversionBase].flag}/flat/48.png`}
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
						<p className='mb-1 text-center text-md-right'>{`Last updated ${date}`}</p>
					</MDBCol>
				</MDBRow>
			</ResultsWrapper>
		);
	}
}

export default ConversionResult;
