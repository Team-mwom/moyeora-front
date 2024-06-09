import React from 'react';

import { IoMdTime } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";

import 'styles/moyeora/commonMoyeora.css'

const MoyeoraResultList = () => {
	return (
		<div className='moyeoraCommon_full'>
      <div className='moyeoraCommon_full_container'>
        <div className='moyeoraCommon_title'>
          오늘의 모여라 !
        </div>
        <div className='moyeoraCommon_inner'>
          
          {/* for 문 돌려야 됨 */}
          <div className='moyeoraCommon'>
            <table className='moyeoraCommon_table'>
              <tr className='moyeoraCommon_table_tr'>
                <td className='moyeoraCommon_table_td_pircture' rowSpan={5}>
                  사진
                </td>
                <td className='moyeoraCommon_table_category'>
                  <div className='category'><span>카테고리</span></div>
                  <div className='category'><span>카테고리</span></div>
                </td>
              </tr>
              <tr>
                <td className='moyeoraCommon_table_title'>
                  <span>제목</span>
                </td>
              </tr>
              <tr>
                <td className='moyeoraCommon_table_count'>
                  <BsPeopleFill className="moyeoraCommon_table_icon"/>
                  <span>인원 수</span>
                </td>
              </tr>
              <tr>
                <td className='moyeoraCommon_table_date'>
                  <IoMdTime className="moyeoraCommon_table_icon"/>
                  <span>시간</span>
                </td>
              </tr>
              <tr>
                <td className='moyeoraCommon_table_place'>
                  <MdOutlinePlace className="moyeoraCommon_table_icon"/>
                  <span>장소</span>
                </td>
              </tr>
            </table>
          </div>

          <div className='moyeoraCommon'>
            오늘의 모여라
          </div>
          <div className='moyeoraCommon'>
            오늘의 모여라
          </div>
          <div className='moyeoraCommon'>
            오늘의 모여라
          </div>
          <div className='moyeoraCommon'>
            오늘의 모여라
          </div>
          <div className='moyeoraCommon'>
            오늘의 모여라
          </div>
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

export default MoyeoraResultList;