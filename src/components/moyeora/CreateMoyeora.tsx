import React from 'react';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

import 'styles/moyeora/createMoyeora.css'

const CreateMoyeora = () => {

	return (
		<div className='createMoyeora_full'>
			<div className='createMoyeora_full_container'>

				<div className='title'>
					모여라 이름
				</div>
				<div className='createMoyeora_title'>
					<InputGroup size="lg">
						<Form.Control
							placeholder="모여라 이름을 입력해주세요 !"
							aria-describedby="inputGroup-sizing-sm"
						/>
					</InputGroup>
				</div>

				{/* DB에서 값 가져와야함 */}
				<div className='title'>
					주제
				</div>
				<div className='createMoyeora_bigCategory'>
					주제 목록
				</div>

				{/* DB에서 값 가져와야함 */}
				<div className='title'>
					소주제
				</div>
				<div className='createMoyeora_smallCategory'>
					소주제 목록
				</div>

				<div className='title'>
					태그
				</div>
				<div className='createMoyeora_tag'>
					<InputGroup size="lg">
						<Form.Control
							placeholder="태그를 입력해주세요 !"
							aria-describedby="inputGroup-sizing-sm"
						/>
					</InputGroup>
					<div className='title_introduce'>
					최대 3개까지 태그 할 수 있습니다.
					</div>
				</div>

				<div className='title'>
					대표 이미지
				</div>
				<div className='createMoyeora_mainImage'>
					<Button variant="outline-dark" size="lg">
						이미지 업로드
					</Button>
				</div>

				<div className='title'>
					대장 소개
				</div>
				<div className='createMoyeora_bossIntroduce'>
					<InputGroup size="lg">
						<Form.Control
							placeholder="모임 대장 이름을 입력해주세요 !"
							aria-describedby="inputGroup-sizing-sm"
						/>
					</InputGroup>
					<br />
					<FloatingLabel controlId="floatingTextarea2" label="멤버에게 자신을 소개해주세요 !">
						<Form.Control
							as="textarea"
							placeholder="Leave a comment here"
							style={{ height: '150px' }}
						/>
					</FloatingLabel>
				</div>

				<div className='title'>
					모임 소개
				</div>
				<div className='createMoyeora_moyeoraIntroduce'>
					<FloatingLabel controlId="floatingTextarea2" label="모임을 소개해주세요 !">
						<Form.Control
							as="textarea"
							placeholder="Leave a comment here"
							style={{ height: '150px' }}
						/>
					</FloatingLabel>
				</div>

				<div className='title'>
					안내 사항
				</div>
				<div className='createMoyeora_notification'>
					<div className='gender'>
						<Form>
							<Form.Check inline type="radio" aria-label="radio 1" label="성별 무관" />
							<Form.Check inline type="radio" aria-label="radio 1" label="남/여" />
						</Form>
					</div>
					<div className='type'>
						<Form>
							<Form.Check inline type="radio" aria-label="radio 1" label="선착순" />
							<Form.Check inline type="radio" aria-label="radio 1" label="승인제" />
						</Form>
					</div>

					<div className='gender_diff_type'>
						{/* 성별 무관 , 남/여로 분기 */}
						<div className='gender_diff'>
							<InputGroup size="sm">
								<Form.Control
									placeholder="남"
									aria-describedby="inputGroup-sizing-sm"
								/>
							</InputGroup>
						</div>
						<div className='gender_diff'>
							<InputGroup size="sm">
								<Form.Control
									placeholder="여"
									aria-describedby="inputGroup-sizing-sm"
								/>
							</InputGroup>
						</div>
						<div className='title_introduce'>
							인원을 입력해주세요
						</div>
					</div>
					{/* 성별 무관 , 남/여로 분기 */}
					<div className='gender_diff_type'>
						<InputGroup size="sm">
							<Form.Control
								placeholder="인원을 입력해주세요 !"
								aria-describedby="inputGroup-sizing-sm"
							/>
						</InputGroup>
					</div>

					{/* 나이 제한 */}
					<br/>
					<div className='age_type'>
						<InputGroup className="mb-3" size="sm">
							<InputGroup.Text>나이 제한</InputGroup.Text>
							<Form.Control placeholder="시작 년도"/>
							<Form.Control placeholder="끝 년도" />
						</InputGroup>
					</div>

					{/* inpytType 캘린더로 변경 필요 */}
					<div className='end_moyeora'>
						<InputGroup size="sm" className="mb-3">
							<InputGroup.Text id="inputGroup-sizing-sm">마감기한</InputGroup.Text>
							<Form.Control
								aria-label="Small"
								aria-describedby="inputGroup-sizing-sm"
							/>
						</InputGroup>
					</div>

					<div className='place'>
						<InputGroup size="sm">
							<Form.Control
								placeholder="주소 검색"
								aria-label="Recipient's username"
								aria-describedby="basic-addon2"
							/>
							<Button variant="outline-secondary" id="button-addon2">
								검색
							</Button>
						</InputGroup>
						{/* readOnly 처리 필요 */}
						<InputGroup size="sm">
							<Form.Control
								placeholder="기본 주소"
								aria-describedby="inputGroup-sizing-sm"
							/>
						</InputGroup>
						<InputGroup size="sm">
							<Form.Control
								placeholder="상세 주소"
								aria-describedby="inputGroup-sizing-sm"
							/>
						</InputGroup>
					</div>
				</div>

				<div className='title'>
					질문 사항
				</div>
				<div className='createMoyeora_question'>
					<InputGroup size="lg">
						<Form.Control
							placeholder="질문을 입력해주세요 !"
							aria-describedby="inputGroup-sizing-sm"
						/>
					</InputGroup>
					<br/>
					<Button variant="outline-dark">+</Button>
				</div>

				<div className='createMoyeora_save'>
					<Button variant="outline-dark" size="lg">
						모임 생성
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CreateMoyeora;
