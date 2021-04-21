import styled from 'styled-components';
import { MDBContainer } from 'mdbreact';

const ConverterWrapper = styled(MDBContainer)`
	font-weight: 500;

	.btn-convert {
		background-color: #81b214;
	}
`;

ConverterWrapper.displayName = 'ConverterWrapper';

export default ConverterWrapper;
