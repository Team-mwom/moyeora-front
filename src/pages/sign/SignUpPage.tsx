import React from 'react';

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

import 'styles/sign/signUp.css'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const SignUpPage = () => {
	

	return (
		<div className='common_full'>
			<Header/>
			<div className='common_container'>
				<div className='signUp_title'>
					회원가입
				</div>
				<div className='signUp_info_container'>
					<div className='signUp_info'>
						<InputGroup size="sm" className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-sm">정보 1</InputGroup.Text>
							<Form.Control
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								/>
						</InputGroup>
						<InputGroup size="sm" className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-sm">정보 2</InputGroup.Text>
							<Form.Control
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
								/>
						</InputGroup>
					</div>
				</div>
				<div className='signUp_button_container'>
					<Button variant="dark">버튼 1</Button>
					<Button variant="dark">버튼 2</Button>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default SignUpPage;
