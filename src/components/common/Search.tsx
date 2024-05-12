import React from 'react';
import {useCallback, useState, ChangeEvent, useEffect, useRef} from 'react';
import { useParams } from "react-router";

//redux
import { useDispatch } from "react-redux";


import "styles/common/components/search.css"

interface Data {
	word: string;
  }

const Search = () => {
	const [word, setWord] = useState('');//수정을 위한 정보를 data에 저장한다.
	const params = useParams();
	//const dispach = useDispatch();

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(word === ""){
			alert("검색어를 입력해주세요");
			return false;
		}

		var url = "/search/" + word;
		alert(url);
		window.location.href = url;
	};

	const getSearchData = (e: ChangeEvent<HTMLInputElement>) => {
		setWord(e.target.value);
	}

	useEffect(() => {
		if(params.word === "" || params.word === null || params.word === undefined){
			//setWord("");
		}else{
			setWord(params.word);
		}
	},[])

	return (
		<div className='search_container'>
			<div className="search_input">
				<form className="data_search_form" onSubmit={onSubmit}>
					<input type="text" value={word} placeholder='통합검색' 
					   onChange={getSearchData} />
					<button value="검색">검색</button>
				</form>
			</div>
		</div>
		
	);
};

export default Search;