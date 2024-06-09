import React from 'react';

import { IoMdTime } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";

import 'styles/moyeora/moyeoraToday.css'

const MoyeoraToday = () => {
	return (
		<div className='moyeoraToday_full'>
      <div className='moyeoraToday_full_container'>
        <div className='moyeoraToday_title'>
          오늘의 모여라 !
        </div>
        <div className='moyeoraToday_inner'>
          
          {/* for 문 돌려야 됨 */}
          <div className='moyeoraToday'>
            <table className='moyeoraToday_table'>
              <tr className='moyeoraToday_table_tr'>
                <td className='moyeoraToday_table_td_pircture' rowSpan={4}>
                  사진
                </td>
                <td className='moyeoratoday_table_category'>
                  <div className='category'><span>카테고리</span></div>
                  <div className='category'><span>카테고리</span></div>
                </td>
              </tr>
              <tr>
                <td className='moyeoratoday_table_title'>
                  제목
                </td>
              </tr>
              <tr>
                <td className='moyeoratoday_table_count'>
                  <BsPeopleFill className="moyeoratoday_table_icon"/>
                  인원 수
                </td>
              </tr>
              <tr>
                <td className='moyeoratoday_table_date'>
                  <IoMdTime className="moyeoratoday_table_icon"/>
                  시간
                </td>
              </tr>
            </table>
          </div>

          <div className='moyeoraToday'>
            오늘의 모여라
          </div>
          <div className='moyeoraToday'>
            오늘의 모여라
          </div>
          <div className='moyeoraToday'>
            오늘의 모여라
          </div>
          <div className='moyeoraToday'>
            오늘의 모여라
          </div>
          <div className='moyeoraToday'>
            오늘의 모여라
          </div>
        </div>
        <div className='moyeoraToday_moreRead_container'>
          <div className='moyeoraToday_moreRead'>
            더보기 +
          </div>
        </div>
      </div>
		</div>
	);
};

export default MoyeoraToday;