import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router";
import axios from 'axios';

import Search from 'components/common/Search';
import Banner from 'components/common/Banner';
import Footer from 'components/common/Footer';
import MoyeoraResultList from 'components/moyeora/MoyeoraResultList';

// redux
import { useSelector, useDispatch } from "react-redux";

interface searchResult {
  categorySeq: number; 
  categoryName: string; 
  subCategorySeq: number;
  subCategoryName: string;

  myrSeq: number;
  myrTitle: string;
  myrTags: string;
  myrMaxMember: number;
  myrMainImg: string;
  myrPlace: string;
  myrDate: string;
  myrMemberCnt: number;
}

interface searchPage {
  content: searchResult[];
  totalPages: number;
  number: number;
}

interface FilterOption {
  sido: string;
  sigungu: string;
  category: string;
  subcategory: string;
}

const SearchResult = () => {
    const [word, setWord] = useState('');
    const params = useParams();
    const location = useLocation();

    const [items, setItems] = useState<searchResult[]>([]);
    const [page, setPage] = useState(0);
    const [size] = useState(6);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [filterOptions, setFilterOptions] = useState<FilterOption>({
      sido: '',
      sigungu: '',
      category: '',
      subcategory: ''
    });

    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const newFilterOptions: FilterOption = {
        sido: searchParams.get('sido') || '',
        sigungu: searchParams.get('sigungu') || '',
        category: searchParams.get('category') || '',
        subcategory: searchParams.get('subcategory') || ''
      };
      setFilterOptions(newFilterOptions);
      setWord(params.word || '');
      setPage(0);
      setItems([]);
      setHasMore(true);
    }, [location.search, params.word]);

    useEffect(() => {
      const fetchItems = async () => {
        if(loading || !hasMore) return;
        
        setLoading(true);
        try {
          const response = await axios.get('/api/all/main/selectSearchMain/', {
              params:{
                  word: params.word,
                  page: page,
                  size: size,
                  ...filterOptions
              }
          });

          console.log("API 응답 로깅 :: " + response.data); // API 응답 로깅
          const newItems = response.data.content.map(formatItemDate);
          setItems(prevItems => [...prevItems, ...newItems]);

          // 더 이상 불러올 페이지가 없으면 hasMore를 false로 설정
          setHasMore(page < response.data.totalPages - 1);
        } catch (error) {
          console.error('Failed to fetch items', error);
        } finally {
          setLoading(false);
        }
      };
      fetchItems();
    }, [page]);



    const formatItemDate = (item: searchResult) => {
      const date = new Date(item.myrDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // month 0-indexed, pad with leading zero
      const day = String(date.getDate()).padStart(2, '0');
      const weekday = date.getDay(); // 0: Sunday, 1: Monday, ...
      const week = ['일', '월', '화', '수', '목', '금', '토'][weekday];
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      
      return {
        ...item,
        myrDate: `${month}/${day}(${week}) ${hours}:${minutes}`
      };
    }; 

    // 더 많은 아이템을 로드하는 함수
    const loadMore = () => {
      setPage(prevPage => prevPage + 1);
    };

    useEffect(() => {
      // ... (이전 useEffect 내용 유지)
    }, [page, params.word, size]); // params.word와 size를 의존성 배열에 추가


    return(
        <>
          <Search/>
          <MoyeoraResultList items={items} onLoadMore={loadMore} hasMore={hasMore} loading={loading}/>
        </>

    );
};

export default SearchResult;