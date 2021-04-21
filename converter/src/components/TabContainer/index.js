import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import Converter from './Converter';
import CurrencyActionCreators from '../../store/currency/actions';
import ContainerWrapper from './index.style';

class TabContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: '1'
		};
	}

	componentDidMount() {
		const { requestEuroLatest } = this.props;
		requestEuroLatest();
	}

	toggle = (tab) => (e) => {
		if (this.state.activeItem !== tab) {
			this.setState({
				activeItem: tab
			});
		}
	};

	render() {
		const { activeItem } = this.state;
		return (
			<ContainerWrapper>
				<MDBNav className='nav-tabs'>
					<MDBNavItem>
						<MDBNavLink link to='#' active={activeItem === '1'} onClick={this.toggle('1')} role='tab'>
							<MDBIcon icon='coins' className='mr-2' /> <FormattedMessage id='Tabs.converter' />
						</MDBNavLink>
					</MDBNavItem>
					<MDBNavItem>
						<MDBNavLink link to='#' active={activeItem === '2'} onClick={this.toggle('2')} role='tab'>
							<MDBIcon far icon='chart-bar' className='mr-2' />
							<FormattedMessage id='Tabs.charts' />
						</MDBNavLink>
					</MDBNavItem>
				</MDBNav>
				<MDBTabContent activeItem={activeItem}>
					<MDBTabPane tabId='1' role='tabpanel'>
						<Converter />
					</MDBTabPane>
					<MDBTabPane tabId='2' role='tabpanel'>
						<p className='mt-2'>
							<FormattedMessage id='Tabs.charts' />
						</p>
					</MDBTabPane>
				</MDBTabContent>
			</ContainerWrapper>
		);
	}
}

const mapStateToProps = (state) => ({
	currencyInfo: state.currency
});

const mapDispatchToProps = (dispatch) => ({
	requestEuroLatest: () => dispatch(CurrencyActionCreators.getEuroLatest())
});

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);
