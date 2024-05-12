import React from 'react';


//compo
import Header from 'components/common/Header';
import Banner from 'components/common/Banner';
import Search from 'components/common/Search';
import SearchResult from 'components/search/SearchResult';

//style
import "styles/common/components/search.css"

// 검색 결과 페이지
const SearchMain = () => {

	return (
		<div className="search_container">
			<Header/>
			<Search/>
			<SearchResult/>	
		</div>
	);
};

export default SearchMain;
