import React, { Component } from 'react';
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import Converter from './Converter';

class TabContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeItem: '1',
		};
	}

	toggle = (tab) => (e) => {
		if (this.state.activeItem !== tab) {
			this.setState({
				activeItem: tab,
			});
		}
	};

	render() {
		const { activeItem } = this.state;
		return (
			<MDBContainer>
				<MDBNav className='nav-tabs mt-5'>
					<MDBNavItem>
						<MDBNavLink link to='#' active={activeItem === '1'} onClick={this.toggle('1')} role='tab'>
							<MDBIcon icon='coins' className='mr-2' /> Converter
						</MDBNavLink>
					</MDBNavItem>
					<MDBNavItem>
						<MDBNavLink link to='#' active={activeItem === '2'} onClick={this.toggle('2')} role='tab'>
							<MDBIcon far icon='chart-bar' className='mr-2' />
							Charts
						</MDBNavLink>
					</MDBNavItem>
				</MDBNav>
				<MDBTabContent activeItem={activeItem}>
					<MDBTabPane tabId='1' role='tabpanel'>
						<Converter />
					</MDBTabPane>
					<MDBTabPane tabId='2' role='tabpanel'>
						<p className='mt-2'>Charts</p>
					</MDBTabPane>
				</MDBTabContent>
			</MDBContainer>
		);
	}
}
export default TabContainer;
