import React from 'react';

import 'styles/myProfile/myProfileInfo/visitorBook.css'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { ProfileConfig } from 'store/slices/profileConfigSlice';

const VisitorBook = () => {
		const profileConfig:ProfileConfig= useSelector((state: RootState) => {
    return state.profileConfig
  });
	return (
		
		<div className='visitorBook_full'>
	
			<div className='visitorBook_container'>
				<h4>
					{"프로필주인:" + profileConfig.nickName}
					<br></br>
					{"내프로필:"+profileConfig.owner}
				</h4>
				<div className='visitorBook_list'>
					{/* for문 돌리기 */}
					<div className='visitorBook_inner'>
						방명록
						<hr className='visitorBook_hr'/>
					</div>

					<div className='visitorBook_list_button'>
						<Button variant="outline-dark" size="lg">
							더보기 +
						</Button>
					</div>
				</div>
				
				<div className='visitorBook_comment'>
					<div className='visitorBook_comment_title'>
						방명록 남기기
					</div>
					<div className='visitorBook_comment_write'>
						<FloatingLabel controlId="floatingTextarea2" label="방명록">
							<Form.Control
								as="textarea"
								placeholder="Leave a comment here"
								style={{ height: '150px' }}
							/>
						</FloatingLabel>
					</div>
					<div className='visitorBook_comment_button'>
						<Button variant="outline-dark" size="lg">
							등록하기
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VisitorBook;