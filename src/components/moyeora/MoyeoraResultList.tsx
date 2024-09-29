import React from 'react';

import { IoMdTime } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";

import 'styles/moyeora/commonMoyeora.css'

interface searchResult {
  myrSeq: number;
  myrTitle: string;
  myrTags: string;
  myrMaxMember: number;
  myrMainImg: string;
  myrPlace: string;
  myrDate: string;
  myrMemberCnt: number; 
}

interface MoyeoraResultListProps {
  items: searchResult[];
  onLoadMore: () => void; // 더보기 버튼 클릭 시 실행할 함수
  hasMore: boolean; // 더 불러올 데이터가 있는지 여부
  loading: boolean; // 데이터 로딩 중인지 여부
}

const MoyeoraResultList: React.FC<MoyeoraResultListProps> = ({ items,onLoadMore, hasMore, loading }) => {
	return (
		<div className='moyeoraCommon_full'>
      <div className='moyeoraCommon_full_container'>
        <div className='moyeoraCommon_title'>
          
        </div>
        <div className='moyeoraCommon_inner'>
          
          {/* for 문 돌려야 됨 */}
          {items.map((item,index) => (          
            <div className='moyeoraCommon' key={item.myrSeq}>
              <table className='moyeoraCommon_table'>
                <tbody>
                  <tr className='moyeoraCommon_table_tr'>
                    <td className='moyeoraCommon_table_td_pircture' rowSpan={5}>
                      <span>{item.myrMainImg}</span>
                    </td>
                    <td className='moyeoraCommon_table_category'>
                      <div className='category'>
                        <span>{item.myrTags}</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className='moyeoraCommon_table_title'>
                      <span>{item.myrTitle}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='moyeoraCommon_table_count'>
                      <BsPeopleFill className="moyeoraCommon_table_icon"/>
                      <span>{item.myrMemberCnt}/{item.myrMaxMember}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='moyeoraCommon_table_date'>
                      <IoMdTime className="moyeoraCommon_table_icon"/>
                      <span>{item.myrDate}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className='moyeoraCommon_table_place'>
                      <MdOutlinePlace className="moyeoraCommon_table_icon"/>
                      <span>{item.myrPlace}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
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