import React from 'react';
import { useCallback, useState, ChangeEvent, useEffect, useRef } from 'react';
import { useParams } from "react-router";
import SearchModal from './SearchModal';
import "styles/common/components/search.css"

interface Data {
	word: string;
  }

	// 필터 옵션 인터페이스 정의함
export interface FilterOption {
	sido: string;
	sigungu: string;
	category: string;
	subcategory: string;
}

const Search = () => {
	const [word, setWord] = useState('');//수정을 위한 정보를 data에 저장한다.
	const [showModal, setShowModal] = useState(false); // 모달 표시 여부 상태
	const [filterOptions, setFilterOptions] = useState<FilterOption>({
		sido: '',
		sigungu: '',
		category: '',
		subcategory: ''
	}); // 필터 옵션 상태값
	const params = useParams();

	// 검색 form 처리 함수
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if(word === ""){
			alert("검색어를 입력해주세요");
			return false;
		}

		window.location.href = "/search/" + word;
	};
  
	// 검색어 입력 처리 함수
	const getSearchData = (e: ChangeEvent<HTMLInputElement>) => {
		setWord(e.target.value);
	}
  
	// 모달 토글 함수
	const toggleModal = () => {
		setShowModal(prevState => {
			return !prevState;
		});
	}

	// 필터 옵션 변경 처리 함수
	const handleFilterChange = (key: keyof FilterOption, value: string) => {
    setFilterOptions(prev => {
      const newOptions = {...prev, [key]: value};
      if (key === 'sido') {
        newOptions.sigungu = '';
      }
      return newOptions;
    });
  }

	// 필터 제거 함수
	const removeFilter = (key: keyof FilterOption) => {
		setFilterOptions(prev => {
			const newOptions = { ...prev };
			if (key === 'sido') {
				newOptions.sido = '';
				newOptions.sigungu = '';
			} else {
				newOptions[key] = '';
			}
			return newOptions;
		});
	}

	// url 파라미터에서 검색어 가져오기
	useEffect(() => {
		if(params.word && params.word !== ""){
      setWord(params.word);
    }
	},[params.word]) // 수정

	return (
		<div className='search_container_div'>
			{/* 선택된 필터 태그 표시 */}
			<div className='filter_tags'>
				{filterOptions.sido && (
					<span className="filter_tag">
						{filterOptions.sido} {filterOptions.sigungu}
						<button onClick={() => {
							removeFilter('sido');
							removeFilter('sigungu');
						}}>x</button>
					</span>
				)}
				{filterOptions.category && (
					<span className="filter_tag">
						{filterOptions.category}
						<button onClick={() => removeFilter('category')}>x</button>
					</span>
				)}
			</div>

			<div className="search_input_wrapper">
        <form className="search_form" onSubmit={onSubmit}>
          <button type="button" onClick={toggleModal} className='detailed_search_btn'>
            상세 검색
          </button>
          <input 
            type="text" 
            value={word} 
            placeholder='통합검색' 
            onChange={getSearchData} 
          />
          <button type="submit" className="search_submit_btn">검색</button>
        </form>
      </div>

			{/* 상세 검색 모달 */}
			<SearchModal 
				isOpen={showModal} 
        onClose={toggleModal} 
        handleFilterChange={handleFilterChange}
        currentFilters={filterOptions}
    	/>
		</div>
		
	);
};

export default Search;