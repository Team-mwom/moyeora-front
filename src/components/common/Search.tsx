import React from 'react';
import {useCallback, useState, ChangeEvent} from 'react';

//redux
import { useDispatch } from "react-redux";


import "styles/common/components/search.css"


const Search = () => {
	const [word, setWord] = useState('');//수정을 위한 정보를 data에 저장한다.
	//const dispach = useDispatch();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		var url = "/search/" + word;
		//alert(url);
		window.location.href = url;
	};

	return (
		<div className='search_container'>
			<div className="search_input">
				<form className="data_search_form" onSubmit={onSubmit}>
					<input type="text" placeholder='통합검색' onChange={useCallback((e: ChangeEvent<HTMLInputElement>) => setWord(e.target.value), [])}/>
					<button 
						value="검색"
					>
					검색</button>
				</form>
			</div>
		</div>
		
	);
};

export default Search;