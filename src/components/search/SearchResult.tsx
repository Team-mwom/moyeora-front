import React from 'react';
import { useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

// redux
import { useSelector, useDispatch } from "react-redux";

interface searchResult {
  myrSeq: number;
  myrTitle: string;
  myrTags: string;
  myrMaxMember: number;
  myrPlace: string;
  myrDate: string;
  myrMemberCnt: number;
}

interface searchPage {
  content: searchResult[];
  totalPages: number;
  number: number;
}

const SearchResult = () => {
    
    const [word, setWord] = useState('');
    const params = useParams();

    const [items, setItems] = useState<searchResult[]>([]);
    const [page, setPage] = useState(0);
    const [size] = useState(20);
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
      const fetchItems = async () => {
        if(loading || !hasMore) return;
        
        setLoading(true);
        try {
          const response = await axios.get('/api/all/main/selectSearchMain/', {
              params:{
                  word: params.word,
                  page: page,
                  size: size
              }
          });

          console.log("API 응답 로깅 :: " + response.data); // API 응답 로깅

          setItems(prevItems => [...prevItems, ...response.data.map(formatItemDate)]);
          setHasMore(!response.data.last);
        } catch (error) {
          console.error('Failed to fetch items', error);
        } finally {
          setLoading(false);
        }
      };
      fetchItems();
    }, [page, search]);

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
      if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight) {
          setPage(prevPage => prevPage + 1);
      }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItems([]);
        setPage(0);
        setSearch(e.target.value);
        setHasMore(true);
    };

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
        
            
    return(
      <div className="searchResult_container">
        <div className="searchBox" onScroll={handleScroll}>
            {items.map(item => (
                <div className="search_moyeora">
                  <div className="search_left">
                    <img className="myrImg" alt="logo_message" src="/images/logo_message.png" />
                  </div>
                  <div className="search_right">
                    <ul>
                      <li><span>{item.myrTags}</span></li>
                      <li>{item.myrTitle}</li>
                      <li>{item.myrMemberCnt}/{item.myrMaxMember}</li>
                      <li>{item.myrPlace}  {item.myrDate}</li>
                    </ul>
                  </div>
                </div>
            ))}
            {loading && <p>검색중...</p>}
        </div>
      </div>
    );
};

export default SearchResult;