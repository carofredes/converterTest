import React, { Component } from 'react';
import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';
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
							Converter
						</MDBNavLink>
					</MDBNavItem>
					<MDBNavItem>
						<MDBNavLink link to='#' active={activeItem === '2'} onClick={this.toggle('2')} role='tab'>
							Charts
						</MDBNavLink>
					</MDBNavItem>
				</MDBNav>
				<MDBTabContent activeItem={activeItem}>
					<MDBTabPane tabId='1' role='tabpanel'>
						<p className='mt-2'>Converter</p>
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
