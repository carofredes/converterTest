import React, { Component } from 'react';
import { MDBRow } from 'mdbreact';

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
						1{currentBase}={rates[conversionBase]}
						{conversionBase}
					</p>
				</MDBRow>
				<MDBRow>
					<p>
						{ammountBase}
						{currentBase} =
					</p>
					<p>
						{this.calculateConversion()}
						{conversionBase}
					</p>
				</MDBRow>
			</div>
		);
	}
}

export default ConversionResult;
