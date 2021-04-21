import React from 'react';
import { MDBNavbarBrand } from 'mdbreact';
import MDBNavbarWrapper from './Header.style';
import { FormattedMessage } from 'react-intl';
import logo from '../exchange.png';

function Header() {
	return (
		<MDBNavbarWrapper>
			<MDBNavbarBrand>
				<img src={logo} className='logo' alt='logo' />
				<strong>
					<FormattedMessage id='App.header' />
				</strong>
			</MDBNavbarBrand>
		</MDBNavbarWrapper>
	);
}

export default Header;
