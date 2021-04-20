import React from 'react';
import { MDBNavbarBrand } from 'mdbreact';
import MDBNavbarWrapper from './Header.style';
import logo from '../exchange.png';

export default function Header() {
	return (
		<MDBNavbarWrapper>
			<MDBNavbarBrand>
				<img src={logo} className='logo' alt='logo' />
				<strong>Currency converter</strong>
			</MDBNavbarBrand>
		</MDBNavbarWrapper>
	);
}
