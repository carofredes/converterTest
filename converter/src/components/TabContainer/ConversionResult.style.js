import styled from 'styled-components';

const ResultsWrapper = styled.div`
	padding: 20px 0px;

	.ammount-base {
		font-size: 16px;
		color: #5c667b;
		font-weight: 600;
		margin-left: 0;
		align-items: center;
	}

	.ammount-converted {
		font-size: 30px;
		font-weight: 600;
		margin-left: 0;
		align-items: center;
	}
`;

ResultsWrapper.displayName = 'ResultsWrapper';

export default ResultsWrapper;
