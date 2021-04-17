import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

export default class Converter extends Component {
	render() {
		return (
			<MDBContainer>
				<form>
					<MDBRow>
						<MDBCol md='6'>
							<MDBRow>
								<MDBCol md='12'>
									<label htmlFor='fromField' className='grey-text font-weight-light'>
										From
									</label>
									<input type='text' id='fromField' className='form-control' />
								</MDBCol>
								<MDBCol md='12'>
									<label htmlFor='ammountFromField' className='grey-text font-weight-light'>
										Ammount:
									</label>
									<input type='text' id='ammountFromField' className='form-control' />
								</MDBCol>
							</MDBRow>
						</MDBCol>
						<MDBCol md='6'>
							<MDBRow>
								<MDBCol md='12'>
									<label htmlFor='toField' className='grey-text font-weight-light'>
										To
									</label>
									<input type='email' id='toField' className='form-control' />
								</MDBCol>

								<MDBCol md='12'>
									<label htmlFor='ammountToField' className='grey-text font-weight-light'>
										Ammount:
									</label>
									<input type='email' id='ammountToField' className='form-control' />
								</MDBCol>
							</MDBRow>
						</MDBCol>
					</MDBRow>
					<MDBBtn className='btn'>Convert</MDBBtn>
				</form>
			</MDBContainer>
		);
	}
}
