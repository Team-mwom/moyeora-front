import React from 'react';


//compo
import Search from 'components/common/Search';
import SearchResult from 'components/search/SearchResult';

//style
import "styles/common/search.css"

// 검색 결과 페이지
const SearchMain = () => {

	return (
		<div className="search_container">
			<Search/>
			<SearchResult/>	
		</div>
	);
};

export default SearchMain;
