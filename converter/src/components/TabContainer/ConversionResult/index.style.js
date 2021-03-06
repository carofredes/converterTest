import styled from 'styled-components';
import { screenSizes } from '../../../screenSizes';

const ResultsWrapper = styled.div`
	padding: 20px 0px;

	.amount-base {
		font-size: 14px;
		color: #5c667b;
		font-weight: 600;
		margin-left: 0;
		align-items: center;
	}

	.amount-converted {
		flex-wrap: nowrap;
		align-items: flex-start;
		line-height: 34px;
		font-size: 28px;
		font-weight: 600;
		margin-left: 0;

		p {
			max-width: 80%;
			overflow: hidden;
		}
	}

	@media ${screenSizes.tablet} {
		.amount-base {
			font-size: 16px;
		}

		.amount-converted {
			line-height: inherit;
			font-size: 30px;
			flex-wrap: wrap;
			align-items: center;
		}
	}
`;

ResultsWrapper.displayName = 'ResultsWrapper';

export default ResultsWrapper;
