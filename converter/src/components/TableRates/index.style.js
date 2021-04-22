import styled from 'styled-components';
import { MDBContainer } from 'mdbreact';
import { screenSizes } from '../../screenSizes';

const TableContainerWrapper = styled(MDBContainer)`
	margin-top: 50px;
	font-family: Inter, sans-serif;
	color: #2e3c57;
	padding: 0;
	text-align: center;

	.table {
		td {
			width: 33%;
		}
	}

	.change-negative {
		color: #ff0000;
	}
	@media ${screenSizes.big} {
		width: 90%;
	}
`;

TableContainerWrapper.displayName = 'TableContainerWrapper';

export default TableContainerWrapper;
