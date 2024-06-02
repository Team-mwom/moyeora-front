import React from 'react';

import 'styles/moyeora/moyeoraDetail.css'

const MoyeoraDetail = () => {

	return (
		<div className='moyeoraDetail_full'>
      <div className='moyeoraDetail_full_container'>

        <div className='moyeoraDetail_title'>
          <div className='title_pic'>
            사진
          </div>

          <div className='title_info_container'>
            <table className='title_info_table'>
              <tbody>
                <tr className=''>
                  <td className='title_info_td_member'>
                    모여라 인원수
                  </td>
                </tr>
                <tr className=''>
                  <td className='title_info_td_title'>
                    모여라 제목
                  </td>
                </tr>
                <tr className=''>
                  <td className='title_info_td_category'>
                    모여라 카테고리
                  </td>
                </tr>
                <tr className=''>
                  <td className='title_info_td_tag'>
                    모여라 태그
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='moyeoraDetail_quick_menu'>
          <table className='quick_menu_table'>
            <tbody>
              <tr className=''>
                <td className='quick_menu_td'>모임 소개</td>
                <td className='quick_menu_td'>멤버 소개</td>
                <td className='quick_menu_td'>안내 사항</td>
                <td className='quick_menu_td'>모임 후기</td>
                <td className='quick_menu_td'>문의 사항</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='moyeoraDetail_introduce_host'>
          <div className='host_pic'>
						사진
					</div>
          <div className='host_info'>
            <table className='host_info_table'>
              <tbody>
                <tr className='host_info_tr'>
                  <td className='host_info_td_title'>호스트 소개</td>
                </tr>
                <tr className='host_info_tr'>
                  <td className='host_info_td_introduce'>모임 소개</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='moyeoraDetail_introduce_moyeora'>
        moyeoraDetail_introduce_moyeora
        </div>
        <div className='moyeoraDetail_introduce_member'>
        moyeoraDetail_introduce_member
        </div>
        <div className='moyeoraDetail_guide'>
          <div className='guide_people'>
          guide_people
          </div>
          <div className='guide_date'>
          guide_date
          </div>
          <div className='guide_place'>
          guide_place
          </div>
          <div className='guide_map'>
          guide_map
          </div>
        </div>
        <div className='moyeoraDetail_review_host'>
        moyeoraDetail_review_host
        </div>
        <div className='moyeoraDetail_question'>
          <div className='question_write'>
          question_write
          </div>
          <div className='question_board'>
          question_board
          </div>
        </div>
        <div className='moyeoraDetail_recommend'>
        moyeoraDetail_recommend
        </div>
      </div>
		</div>
	);
};

export default MoyeoraDetail;
