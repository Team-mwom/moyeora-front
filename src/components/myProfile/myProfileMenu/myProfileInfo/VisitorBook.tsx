import React, { useCallback, useEffect, useState } from 'react';

import 'styles/myProfile/myProfileInfo/visitorBook.css'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { ProfileConfig } from 'store/slices/profileConfigSlice';
import axios from 'axios';
import { Pagination } from 'react-bootstrap';


interface Review {

	nickName: String;
	star: number;
	content: String;
	date: String;
}

const VisitorBook = () => {
		const profileConfig:ProfileConfig= useSelector((state: RootState) => {
    	return state.profileConfig
		});
	
	const [review, setReview] = useState<Review[] | null>(null);
	const [pageNums, setPageNums] = useState<React.JSX.Element[]|null>();
	const fristSize = 3;//더보기 누르기 전 사이즈
	const pagingSize = 5;//더보기 누른 후 사이즈

	

  useEffect(() => {//더보기 누르기 전
    axios.get('/api/all/memberReviewList?page=0&size='+fristSize)
			.then((response) => {
				setReview(response.data as Review[])
			})
      .catch((error) => console.log(error));
   
    }, []);
	
	const moreList = useCallback((e: any) => {//더보기 눌렀을때
		e.target.hidden = true;
	
		axios.get('/api/all/memberReviewList?page=0&size='+pagingSize)
			.then((response) => {
				setReview(
					response.data as Review[]
				)
				handlePage(1, response.data[0].totalPage);
			})
      .catch((error) => console.log(error));
   
    }, []);

	const clickPageNum = (number:number) => {//페이지 숫자 클릭시
		axios.get('/api/all/memberReviewList?page='+(number-1)+'&size='+pagingSize)
			.then((response) => {
				console.log(response.data)
				setReview(
					response.data as Review[]
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
	
	
	return (
		
		<div className='visitorBook_full'>
	
			<div className='visitorBook_container'>
				<h4>
					{"프로필주인:" + profileConfig.nickName}
					<br></br>
					{"내프로필:"+profileConfig.owner}
				</h4>
					<form>
						{
							review && review.map(rowData => (
								<div className='visitorBook_list'>
									{/* for문 돌리기 */}
									<div className='visitorBook_inner'>
										{rowData.nickName}
										{rowData.star}
										{rowData.date}
										<hr className='visitorBook_hr' />
										{rowData.content}
									</div>

									
								</div>
							)
						)
						
						}
						<div className='visitorBook_list_button'>
							<Button variant="outline-dark" size="lg" onClick={moreList}>
								더보기 +
						</Button>
						<Pagination>{pageNums}</Pagination>
						</div>
					</form>
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