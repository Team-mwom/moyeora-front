import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';


interface Review {
	memberReviewSeq: number;
	memberSeq: number;
	writer: number;
	star: number;
	content: String;
}

const TestSlicePage = () => {
	const [review, setReview] = useState<Review[] | null>(null);
	const [pageNums, setPageNums] = useState<React.JSX.Element[]|null>();
	const fristSize = 3;//더보기 누르기 전 사이즈
	const pagingSize = 5;//더보기 누른 후 사이즈

	

  useEffect(() => {//더보기 누르기 전
    axios.get('/api/all/memberReviewList?page=0&size='+fristSize)
			.then((response) => {
				setReview(response.data.content as Review[])
			})
      .catch((error) => console.log(error));
   
    }, []);
	
	const moreList = useCallback((e: any) => {//더보기 눌렀을때
		e.target.hidden = true;
	
		axios.get('/api/all/memberReviewList?page=0&size='+pagingSize)
			.then((response) => {
				setReview(
					response.data.content as Review[]
				)
				handlePage(1, response.data.totalPages);
			})
      .catch((error) => console.log(error));
   
    }, []);

	const clickPageNum = (number:number) => {//페이지 숫자 클릭시
		axios.get('/api/all/memberReviewList?page='+(number-1)+'&size='+pagingSize)
			.then((response) => {
				setReview(
					response.data.content as Review[]
				)
				handlePage(number, response.data.totalPages);
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
		<form>
			{ <table>
				<th>memberReviewSeq</th>
				<th>memberSeq</th>
				<th>writer</th>
				<th>star</th>
				<th>content</th>
			{
				
				review && review.map(rowData => (
				<tr>
					<td>{rowData.memberReviewSeq}</td>	
					<td>{rowData.memberSeq}</td>	
					<td>{rowData.writer}</td>	
					<td>{rowData.star}</td>	
					<td>{rowData.content}</td>	
				</tr>
				)
					)
					
			}
			</table>}
			<div className='more' onClick={moreList}>더보기+</div>
			<Pagination>{pageNums}</Pagination>
	</form>
	);
};

export default TestSlicePage;
