import styled from 'styled-components';

const MDBNavbarWrapper = styled.div`
	color: #050505;
	padding: 20px;

	.navbar-brand {
		margin-left: 75px;
	}

	.logo {
		height: 25px;
		transform: rotate(134deg);
	}

	strong {
		font-family: 'Work Sans', 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
		color: #1f2667;
		font-weight: 700;
		font-size: 24px;
		padding-left: 11px;
	}
`;

MDBNavbarWrapper.displayName = 'MDBNavbarWrapper';

export default MDBNavbarWrapper;
