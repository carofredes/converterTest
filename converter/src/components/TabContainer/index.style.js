import styled from 'styled-components';
import { MDBContainer } from 'mdbreact';
import { screenSizes } from '../../screenSizes';

const ContainerWrapper = styled(MDBContainer)`
	margin-top: 50px;
	width: 90%;
	font-family: Inter, sans-serif;
	color: #2e3c57;
	background: #fff;
	border-radius: 5px;
	padding: 0;
	min-height: 50%;
	border: 1px solid lightgrey;
	display: flex;
	flex-direction: column;

	.tab-content {
		flex: 1;
	}

	@media ${screenSizes.big} {
		margin-top: 100px;
		width: 100%;
	}
`;

ContainerWrapper.displayName = 'ContainerWrapper';

export default ContainerWrapper;
