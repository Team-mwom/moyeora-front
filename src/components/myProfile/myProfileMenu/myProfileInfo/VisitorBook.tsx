import React, { useCallback, useEffect, useState } from 'react';

import 'styles/myProfile/myProfileInfo/visitorBook.css'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { ProfileConfig } from 'store/slices/profileConfigSlice';
import axios from 'axios';
import { FormControlProps, Pagination } from 'react-bootstrap';
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { IconContext } from 'react-icons';
import { useCookies } from 'react-cookie';
import { authAxios } from 'utils/auth/authAxios';
import { authException } from 'utils/auth/authException';
interface ReviewType {
	ownerNickName: String;
	writerNickName: String;
	star: number;
	content: String;
	date: String;
}

const VisitorBook = () => {
	const fristSize = 3;//더보기 누르기 전 사이즈
	const pagingSize = 7;//더보기 누른 후 사이즈
	const profileConfig:ProfileConfig= useSelector((state: RootState) => {
    	return state.profileConfig
	});
	const [cookies, setCookie, removeCookie] = useCookies();
	const [review, setReview] = useState<ReviewType[] | null>(null);
	const [pageNums, setPageNums] = useState<React.JSX.Element[]|null>();

	const star: any[] = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />]

	const [starPoint, setStarPoint] = useState(3);
	const [fullStar,setFullStar]=useState<React.JSX.Element[]>([]);
	const [emtyStar,setEmtyStar]=useState<React.JSX.Element[]>([]);
	const [content, setContent] = useState<String>("");

	const handleStar = () => { //최대페이지로 화면에 출력할 페이지 숫자를 만들어줌
	
		let fullStarItem:any[]=[], emtyStarItem:any[]=[];
		for (let number = 1; number <= 5; number++) {
			fullStarItem.push(
				<FaStar onClick={() => clickStar(number)} />,
			);
			emtyStarItem.push(
				<CiStar onClick={() => clickStar(number)} />,
			);
		}
		setFullStar(fullStarItem);
		setEmtyStar(emtyStarItem);
	}



	const clickStar = (num: number) => { 
			setStarPoint(num);
	}
	

	useEffect(() => {//더보기 누르기 전
		handleStar();
		axios.get('/api/all/memberReviewList?page=0&size=' + fristSize+'&nickName='+profileConfig.nickName
		
		)
			.then((response) => {
			
				setReview(response.data as ReviewType[])
			})
      .catch((error) => console.log(error));
   
    }, [profileConfig]);
	
	const clickMoreList = useCallback((e: any) => {//더보기 눌렀을때
		e.target.hidden = true;
		morelist();
	}, [profileConfig]);
	
	const morelist = useCallback(() => {//더보기
		axios.get('/api/all/memberReviewList?page=0&size='+pagingSize+'&nickName='+profileConfig.nickName)
			.then((response) => {
				setReview(
					response.data as ReviewType[]
				)
				handlePage(1, response.data[0].totalPage);
			})
      .catch((error) => console.log(error));
   
		}, [profileConfig]);


	const clickPageNum = (number:number) => {//페이지 숫자 클릭시
		axios.get('/api/all/memberReviewList?page='+(number-1)+'&size='+pagingSize+'&nickName='+profileConfig.nickName)
			.then((response) => {
				console.log(response.data)
				setReview(
					response.data as ReviewType[]
				)
				handlePage(number, response.data[0].totalPage);
			})
      .catch((error) => console.log(error));
	}
	
	const handlePage = (active:number,totalPages:number) => { //최대페이지로 화면에 출력할 페이지 숫자를 만들어줌
		let items = [];
		for (let number = 1; number <= totalPages; number++) {
			items.push(
				<Pagination.Item key={number} active={number === active} onClick={()=>clickPageNum(number)} value={number}>
					{number}
				</Pagination.Item>,
			);
		}
		setPageNums(items);
	}
	
	const changeContent = (e: any) => {
		let content = e.target.value;
		setContent(content);
	}
	const clickWrite = (e: any) => {
		if (content == "") {
			alert('내용을 입력해주세요')
		} else {
			let sendData: ReviewType = {
				ownerNickName: profileConfig.nickName,
				writerNickName: "",
				star: starPoint,
				content: content,
				date: "",
			}
			authAxios.post("/api/user/insertReview", sendData).then((res) => {
				if (authException(res, [cookies, setCookie, removeCookie])) {
					morelist();
					e.target.form.content.value = "";
				}
			}
			
			).catch(()=>alert('로그인후 이용가능합니다.'))


		}
	}
	return (
		
		<div className='visitorBook_full'>
	
			<div className='visitorBook_container'>
			
					<form>
						{
							review && review.map(rowData => (
								<div className='visitorBook_list'>
									{/* for문 돌리기 */}
									<div className='visitorBook_inner'>
										<span className='visitorBook_nickName'>{rowData.writerNickName}</span>
										<span className='visitorBook_stars'>{star.map((stars,idx) => {if(idx<rowData.star) return stars })}</span>
										<span className='visitorBook_date'>{rowData.date}</span>
										<hr className='visitorBook_hr' />
										{rowData.content}
									</div>

									
								</div>
							)
						)
						
						}
						<div className='visitorBook_list_button'>
						<Button variant="outline-dark" size="lg" onClick={clickMoreList}>
							
							더보기 +
							
						</Button>
						<Pagination>{pageNums}</Pagination>
						</div>
				</form>
				<form>
					<div className='visitorBook_comment'>
						<div className='visitorBook_comment_title'>
							방명록 남기기
						</div>
						<div className='visitorBook_comment_write'>
							
							
								<IconContext.Provider value={{ style: { fontSize:'24px',cursor:"pointer" } }}>
								{fullStar.map((stars, idx) => { if (idx < starPoint) return stars })}
								{emtyStar.map((stars, idx) => { if (starPoint - 1 < idx && idx < 5) return stars })}
								</IconContext.Provider>
								<Form.Control
									name = "content"
									as="textarea"
									placeholder="내용 입력"
									style={{ height: '150px' }}
									onKeyUp={changeContent}
								/>
							
						</div>
						<div className='visitorBook_comment_button'>
							<Button variant="outline-dark" size="lg" onClick={clickWrite}>
								등록하기
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default VisitorBook;