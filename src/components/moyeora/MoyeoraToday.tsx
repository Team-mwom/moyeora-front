import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoyeoraCard from 'components/moyeora/MoyeoraCard';
import { Moyeora } from 'interface/MoyeoraInterface';

import 'styles/moyeora/commonMoyeora.css'

const MoyeoraToday: React.FC = () => {
  const [moyeoraList, setMoyeoraList] = useState<Moyeora[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(0); // 현재 페이지 번호
  const [size, setSize] = useState<number>(4); // 페이지당 항목 수
  const [hasMore, setHasMore] = useState<boolean>(true); // 더 가져올 항목이 있는지 여부

  const fetchMoyeoraList = async () => {
    try {
      const response = await axios.get<Moyeora[]>(`http://localhost:8080/api/all/main/list?page=${page}&size=${size}`);
      const newMoyeoraList = response.data;

      if (newMoyeoraList.length < size) {
        setHasMore(false);
      }

      setMoyeoraList(prevList => [...prevList, ...newMoyeoraList]);
      setLoading(false);
    } catch (err) {
      setError('데이터를 가져오는 중 에러가 발생했습니다.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoyeoraList();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='moyeoraCommon_full'>
      <div className='moyeoraCommon_full_container'>
        <div className='moyeoraCommon_title'>
          오늘의 모여라 !
        </div>
        <div className='moyeoraCommon_inner'>

          {moyeoraList.map((moyeora, index) => (
            <MoyeoraCard key={index} moyeora={moyeora} />
          ))}
        </div>
        {hasMore && (
          <div className='moyeoraCommon_moreRead_container'>
            <div className='moyeoraCommon_moreRead' onClick={handleLoadMore}>
              더보기 +
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoyeoraToday;