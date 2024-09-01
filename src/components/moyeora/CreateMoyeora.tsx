import React, { useCallback, useState }from 'react';
import Post from 'components/sign/Post';

import { authAxios } from 'utils/auth/authAxios';
import { authException } from 'utils/auth/authException';
import { useCookies } from 'react-cookie';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

import 'styles/moyeora/createMoyeora.css'

interface moyeoraDto {
	myrTitle: String;
	myrTags: String;
	myrMaxMember: Number;
	// myrMainImg: String;
	// subCategorySeq: Number;
}

interface moyeoraInfoDto {
	myrIntroduce: String;
	myrOwnerName: String;
	myrOwnerIntroduce: String;
	myrGenderYn: String;
	myrApprovalYn: String;
	myrMinAge: Number;
	myrMaxAge: Number;
	myrQuestion1: String;
	myrQuestion2: String;
	myrQuestion3: String;
}

interface moyeoraPlaceDto {
	myrAddressNumber: String;
	myrAddressLocation: String;
	myrPlace: Number;
	myrLongitude: Number;
	myrLatitude: Number;
	myrSido: String;
	myrSigungu: String;
}

const CreateMoyeora = () => {

	let moyeoraDto: moyeoraDto = {
		myrTitle: ""
		, myrTags: ""
		, myrMaxMember: 0
		// , myrMainImg: ""
		// , subCategorySeq: 0
	}
	let moyeoraInfoDto: moyeoraInfoDto = {
		myrIntroduce: ""
		, myrOwnerName : ""
		, myrOwnerIntroduce: ""
		, myrGenderYn: ""
		, myrApprovalYn: ""
		, myrMinAge: 0
		, myrMaxAge: 0
		, myrQuestion1: ""
		, myrQuestion2: ""
		, myrQuestion3: ""
	}
	let moyeoraPlaceDto: moyeoraPlaceDto = {
		myrAddressNumber: ""
		, myrAddressLocation: ""
		, myrPlace: 0
		, myrLongitude: 0
		, myrLatitude: 0
		, myrSido: ""
		, myrSigungu: ""
	}

	const [cookies, setCookie, removeCookie] = useCookies();

	/**
	 * 다음 우편번호 서비스 API 관련
	 */
	// start
	const [enroll_company, setEnroll_company] = useState({
	  code:'',
    addr: '',
	});

	const [popup, setPopup] = useState(false);//주소찾기 팝업

	const handleComplete = (e:any) => { 
		setPopup(!popup);
	}

	const onChangeAddressDetail = useCallback((e: any) => { 
		moyeoraPlaceDto.myrPlace = e.target.value;
	}, []);
	// end

	// moyeoraDto
	const [myrTitle, setMyrTitle] = useState<String>("");
	const [myrTags, setMyrTags] = useState<String>("");
	const [myrMaxMember, setMyrMaxMember] = useState<Number>(0);

	const changeMyrTitle = (e: any) => {
		let myrTitle = e.target.value;
		setMyrTitle(myrTitle);
	}
	const changeMyrTags = (e: any) => {
		let myrTags = e.target.value;
		setMyrTags(myrTags);
	}
	const changeMyrMaxMember = (e: any) => {
		let myrMaxMember = e.target.value;
		setMyrMaxMember(myrMaxMember);
	}

	// moyeoraInfoDto
	const [myrIntroduce, setMyrIntroduce] = useState<String>("");
	const [myrOwnerName, setMyrOwnerName] = useState<String>("");
	const [myrOwnerIntroduce, setMyrOwnerIntroduce] = useState<String>("");
	const [myrGenderYn, setMyrGenderYn] = useState<String>("");
	const [myrApprovalYn, setMyrApprovalYn] = useState<String>("");
	const [myrMinAge, setMyrMinAge] = useState<Number>(0);
	const [myrMaxAge, setMyrMaxAge] = useState<Number>(0);
	const [myrQuestion1, setMyrQuestion1] = useState<String>("");
	const [myrQuestion2, setMyrQuestion2] = useState<String>("");
	const [myrQuestion3, setMyrQuestion3] = useState<String>("");

	const changeMyrIntroduce = (e: any) => {
		let myrIntroduce = e.target.value;
		setMyrIntroduce(myrIntroduce);
	}
	const changeMyrOwnerName = (e: any) => {
		let myrOwnerName = e.target.value;
		setMyrOwnerName(myrOwnerName);
	}
	const changeMyrOwnerIntroduce = (e: any) => {
		let myrOwnerIntroduce = e.target.value;
		setMyrOwnerIntroduce(myrOwnerIntroduce);
	}
	const changeMyrGenderYn = (e: any) => {
		let myrGenderYn = e.target.value;
		setMyrGenderYn(myrGenderYn);
	}
	const changeMyrApprovalYn = (e: any) => {
		let myrApprovalYn = e.target.value;
		setMyrApprovalYn(myrApprovalYn);
	}
	const changeMyrMinAge = (e: any) => {
		let myrMinAge = e.target.value;
		setMyrMinAge(myrMinAge);
	}
	const changeMyrMaxAge = (e: any) => {
		let myrMaxAge = e.target.value;
		setMyrMaxAge(myrMaxAge);
	}
	const changeMyrQuestion1 = (e: any) => {
		let myrQuestion1 = e.target.value;
		setMyrQuestion1(myrQuestion1);
	}
	const changeMyrQuestion2 = (e: any) => {
		let myrQuestion2 = e.target.value;
		setMyrQuestion2(myrQuestion2);
	}
	const changeMyrQuestion3 = (e: any) => {
		let myrQuestion3 = e.target.value;
		setMyrQuestion3(myrQuestion3);
	}

	// moyeoraPlaceDto
	const [myrAddressNumber, setMyrAddressNumber] = useState<String>("");
	const [myrAddressLocation, setMyrAddressLocation] = useState<String>("");
	const [myrPlace, setMyrPlace] = useState<Number>(0);
	const [myrLongitude, setMyrLongitude] = useState<Number>(0);
	const [myrLatitude, setMyrLatitude] = useState<Number>(0);
	const [myrSido, setMyrSido] = useState<String>("");
	const [myrSigungu, setMyrSigungu] = useState<String>("");

	const changeMyrAddressNumber = (e: any) => {
		let myrAddressNumber = e.target.value;
		setMyrAddressNumber(myrAddressNumber);
	}
	const changeMyrAddressLocation = (e: any) => {
		let myrAddressLocation = e.target.value;
		setMyrAddressLocation(myrAddressLocation);
	}
	const changeMyrPlace = (e: any) => {
		let myrPlace = e.target.value;
		setMyrPlace(myrPlace);
	}
	const changeMyrLongitude = (e: any) => {
		let myrLongitude = e.target.value;
		setMyrLongitude(myrLongitude);
	}
	const changeMyrLatitude = (e: any) => {
		let myrLatitude = e.target.value;
		setMyrLatitude(myrLatitude);
	}
	const changeMyrSido = (e: any) => {
		let myrSido = e.target.value;
		setMyrSido(myrSido);
	}
	const changeMyrSigungu = (e: any) => {
		let myrSigungu = e.target.value;
		setMyrSigungu(myrSigungu);
	}

	const clickCreateMoyeora = (e: any) => {
		moyeoraDto.myrTitle = myrTitle
		moyeoraDto.myrTags = myrTags
		moyeoraDto.myrMaxMember = myrMaxMember

		moyeoraInfoDto.myrIntroduce = myrIntroduce
		moyeoraInfoDto.myrOwnerName = myrOwnerName
		moyeoraInfoDto.myrOwnerIntroduce = myrOwnerIntroduce
		moyeoraInfoDto.myrGenderYn = myrGenderYn
		moyeoraInfoDto.myrApprovalYn = myrApprovalYn
		moyeoraInfoDto.myrMinAge = myrMinAge
		moyeoraInfoDto.myrMaxAge = myrMaxAge
		moyeoraInfoDto.myrQuestion1 = myrQuestion1
		moyeoraInfoDto.myrQuestion2 = myrQuestion2
		moyeoraInfoDto.myrQuestion3 = myrQuestion3

		moyeoraPlaceDto.myrAddressNumber = myrAddressNumber
		moyeoraPlaceDto.myrAddressLocation = myrAddressLocation
		moyeoraPlaceDto.myrPlace = myrPlace
		moyeoraPlaceDto.myrLongitude = myrLongitude
		moyeoraPlaceDto.myrLatitude = myrLatitude
		moyeoraPlaceDto.myrSido = myrSido
		moyeoraPlaceDto.myrSigungu = myrSigungu

		let sendData = {
			moyeoraDto
			, moyeoraInfoDto
			, moyeoraPlaceDto
		};

		authAxios.post("/api/user/moyeora/create-moyeora", sendData).then((res) => {
			if (authException(res, [cookies, setCookie, removeCookie])) {

			}
		}).catch(()=>alert('로그인후 이용가능합니다.'))
	}

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
							onKeyUp={changeMyrTitle}
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
							onKeyUp={changeMyrTags}
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
							onKeyUp={changeMyrOwnerName}
						/>
					</InputGroup>
					<br />
					<FloatingLabel controlId="floatingTextarea2" label="멤버에게 자신을 소개해주세요 !">
						<Form.Control
							as="textarea"
							placeholder="Leave a comment here"
							style={{ height: '150px' }}
							onKeyUp={changeMyrIntroduce}
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
							onKeyUp={changeMyrOwnerIntroduce}
						/>
					</FloatingLabel>
				</div>

				<div className='title'>
					안내 사항
				</div>
				<div className='createMoyeora_notification'>
					<div className='gender'>
						<Form>
							{/* <Form.Check inline type="radio" aria-label="radio 1" label="성별 무관" /> */}
							{/* <Form.Check inline type="radio" aria-label="radio 1" label="남/여" /> */}
							<Form.Check inline type="radio" aria-label="radio 1" label="성별 무관" onKeyUp={changeMyrGenderYn}/>
							<Form.Check inline type="radio" aria-label="radio 1" label="남/여" onKeyUp={changeMyrGenderYn}/>
						</Form>
					</div>
					<div className='type'>
						<Form>
							{/* <Form.Check inline type="radio" aria-label="radio 1" label="선착순" />
							<Form.Check inline type="radio" aria-label="radio 1" label="승인제" /> */}
							<Form.Check inline type="radio" aria-label="radio 1" label="선착순" onKeyUp={changeMyrApprovalYn}/>
							<Form.Check inline type="radio" aria-label="radio 1" label="승인제" onKeyUp={changeMyrApprovalYn}/>
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
								onKeyUp={changeMyrMaxMember}
							/>
						</InputGroup>
					</div>

					{/* 나이 제한, changeMyrMinAge, changeMyrPrice */}
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

					{/* 지도 API 사용하여 어떻게 나눠야되는지 고민 */}
					<div className='place'>
						<InputGroup size="sm">
							<Form.Control
								placeholder="우편번호"
								aria-label="Recipient's username"
								aria-describedby="basic-addon2"
								value={enroll_company.code}
							/>
							<Button variant="outline-secondary" id="button-addon2" onClick={handleComplete}>
								검색
							</Button>
						</InputGroup>
						{/* readOnly 처리 필요 */}
						<InputGroup size="sm">
							<Form.Control
								placeholder="기본 주소"
								aria-describedby="inputGroup-sizing-sm"
								value={enroll_company.addr}
							/>
						</InputGroup>
						<InputGroup size="sm">
							<Form.Control
								placeholder="상세 주소"
								aria-describedby="inputGroup-sizing-sm"
								onChange={onChangeAddressDetail}
							/>
						</InputGroup>

					</div>
				</div>

				{/* changeMyrQuestion1, changeMyrQuestion2, changeMyrQuestion3 */}
				<div className='title'>
					질문 사항
				</div>
				<div className='createMoyeora_question'>
					<InputGroup size="lg">
						<Form.Control
							placeholder="질문을 입력해주세요 !"
							aria-describedby="inputGroup-sizing-sm"
							onKeyUp={changeMyrQuestion1}
						/>
					</InputGroup>
					<br/>
					<Button variant="outline-dark">+</Button>
				</div>

				<div className='createMoyeora_save'>
					<Button variant="outline-dark" size="lg" onClick={clickCreateMoyeora}>
						모임 생성
					</Button>
				</div>
			</div>

			{popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}

		</div>
	);
};

export default CreateMoyeora;
