import React from 'react';


//compo
import Header from 'components/common/Header';
import Banner from 'components/common/Banner';
import Footer from 'components/common/Footer';
import SearchResult from 'components/search/SearchResult';

//style
import "styles/common/components/search.css"

// 검색 결과 페이지
const SearchMain = () => {

	return (
		
		<div className='common_full'>
			<Header/>
			<Banner/>
			<div className='main_full'>
				<div className="search_container">
					<SearchResult/>	
				</div>
			</div>
			<Footer/>
		</div>
			
	);
};

export default SearchMain;
