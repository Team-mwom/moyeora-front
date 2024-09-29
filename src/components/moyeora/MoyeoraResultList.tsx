import React from 'react';

import { IoMdTime } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";
import { Moyeora } from 'interface/MoyeoraInterface';
import 'styles/moyeora/commonMoyeora.css'
import MoyeoraCard from './MoyeoraCard';

// interface searchResult {
//   myrSeq: number;
//   myrTitle: string;
//   myrTags: string;
//   myrMaxMember: number;
//   myrPlace: string;
//   myrDate: string;
//   formula: number;
//   myrMemberCnt: number; 
// }

interface MoyeoraResultListProps {
  items: Moyeora[];
  onLoadMore: () => void; // 더보기 버튼 클릭 시 실행할 함수
  hasMore: boolean; // 더 불러올 데이터가 있는지 여부
  loading: boolean; // 데이터 로딩 중인지 여부
}

const MoyeoraResultList: React.FC<MoyeoraResultListProps> = ({ items,onLoadMore, hasMore, loading }) => {
	return (
		<div className='moyeoraCommon_full'>
      <div className='moyeoraCommon_full_container'>
        <div className='moyeoraCommon_title'>
          검색당함
        </div>
        <div className='moyeoraCommon_inner'>
          
          {/* for 문 돌려야 됨 */}
          {items.map((item,index) => (          
           <MoyeoraCard key={index} moyeora={item} />
          ))}
        </div>
        {hasMore && (
            <div className='moyeoraCommon_moreRead_container'>
                <button 
                    className='moyeoraCommon_moreRead' 
                    onClick={onLoadMore}
                    disabled={loading}
                >
                    {loading ? '로딩 중...' : '더보기 +'}
                </button>
            </div>
        )}
      </div>
		</div>
	);
};

export default MoyeoraResultList;