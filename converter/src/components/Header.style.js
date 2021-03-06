import styled from 'styled-components';
import { screenSizes } from '../screenSizes';

const MDBNavbarWrapper = styled.div`
	color: #050505;
	padding: 10px;

	.navbar-brand {
		text-align: center;
		width: 100%;
	}

	.logo {
		height: 25px;
		width: 25px;
		transform: rotate(134deg);
	}

	strong {
		font-family: 'Work Sans', 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
		color: #1f2667;
		font-weight: 700;
		font-size: 24px;
		padding-left: 11px;
	}

	@media ${screenSizes.big} {
		padding: 20px;

		.navbar-brand {
			margin-left: 75px;
			text-align: left;
			width: auto%;
		}
	}
`;

MDBNavbarWrapper.displayName = 'MDBNavbarWrapper';

export default MDBNavbarWrapper;
