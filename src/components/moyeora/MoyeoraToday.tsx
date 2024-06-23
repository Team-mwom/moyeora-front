import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoyeoraCard from 'components/moyeora/MoyeoraCard';
import { Moyeora } from 'interface/MoyeoraInterface';

import 'styles/moyeora/commonMoyeora.css'

const moyeoraData: Moyeora[] = [
  {
    categoryName: '운동',
    subCategoryName: '등산',
    myrTitle: '주말 등산 모임',
    myrMaxMember: 10,
    myrCurrentMember: 8,
    myrPlace: '서울 남산',
    myrDate: '2024-06-10 09:00 AM',
  },
  {
    categoryName: '음악',
    subCategoryName: '기타',
    myrTitle: '기타 동호회',
    myrMaxMember: 15,
    myrCurrentMember: 5,
    myrPlace: '부산 센텀시티',
    myrDate: '2024-06-11 07:00 PM',
  },
];

const MoyeoraToday: React.FC = () => {
  const [moyeoraList, setMoyeoraList] = useState<Moyeora[]>(moyeoraData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchMoyeoraList = async () => {
      try {
        const response = await axios.get<{ moyeoraVoList: Moyeora[] }>('http://localhost:8080/api/all/main/list');
        setMoyeoraList(response.data.moyeoraVoList);
        console.log(response.data);
        console.log(moyeoraList);
        setLoading(false);
      } catch (err) {
        setError('데이터를 가져오는 중 에러가 발생했습니다.');
        setLoading(false);
      }
    };

    fetchMoyeoraList();
  }, []);
  // console.log(moyeoraList);

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
        <div className='moyeoraCommon_moreRead_container'>
          <div className='moyeoraCommon_moreRead'>
            더보기 +
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoyeoraToday;