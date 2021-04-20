import React, { Component } from 'react';
import { MDBRow } from 'mdbreact';

import currencyExtraInfo from '../../currencyExtras';

class ConversionResult extends Component {
	calculateConversion = () => {
		const { rates, ammountBase, conversionBase } = this.props;

		return ammountBase * rates[conversionBase];
	};

	render() {
		const { ammountBase, rates, currentBase, conversionBase } = this.props;
		return (
			<div>
				<MDBRow>
					<p>
						<img
							src={`https://www.countryflags.io/${currentBase && currencyExtraInfo[currentBase].flag}/flat/24.png`}
							alt='flag'
						/>
						1{currentBase}={' '}
						<img
							src={`https://www.countryflags.io/${
								conversionBase && currencyExtraInfo[conversionBase].flag
							}/flat/24.png`}
							alt='flag'
						/>
						{rates[conversionBase]}
						{conversionBase}
					</p>
				</MDBRow>
				<MDBRow>
					<p>
						<img
							src={`https://www.countryflags.io/${currentBase && currencyExtraInfo[currentBase].flag}/flat/24.png`}
							alt='flag'
						/>
						{ammountBase || 0}
						{currentBase} =
					</p>
					<p>
						<img
							src={`https://www.countryflags.io/${
								conversionBase && currencyExtraInfo[conversionBase].flag
							}/flat/24.png`}
							alt='flag'
						/>
						{this.calculateConversion()}
						{conversionBase}
					</p>
				</MDBRow>
			</div>
		);
	}
}

export default ConversionResult;
