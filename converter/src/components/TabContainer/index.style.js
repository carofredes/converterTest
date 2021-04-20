import styled from 'styled-components';
import { MDBContainer } from 'mdbreact';

const ContainerWrapper = styled(MDBContainer)`
	font-family: Inter, sans-serif;
	color: #2e3c57;
	background: #fff;
	border-radius: 5px;
	padding: 0;
	min-height: 50%;
	border: 1px solid lightgrey;
	margin-top: 100px;
	display: flex;
	flex-direction: column;

	.tab-content {
		flex: 1;
	}
`;

ContainerWrapper.displayName = 'ContainerWrapper';

export default ContainerWrapper;
