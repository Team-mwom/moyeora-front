import React, { useState } from 'react';
import Modal from "react-modal";

import { IoMdTime } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlinePlace } from "react-icons/md";

import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

import MoyeoraJoinModal from 'components/moyeora/MoyeoraJoinModal';

import 'styles/moyeora/moyeoraDetail.css'
import 'styles/moyeora/commonMoyeora.css'

const MoyeoraDetail = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMoyeoraJoinModal = () => {
    setIsOpen(true);
  }

  const closeMoyeoraJoinModal = () => {
    setIsOpen(false);
  }

	return (
		<div className='moyeoraDetail_full'>
      <div className='moyeoraDetail_full_container'>

        <MoyeoraJoinModal 
          isOpen={isOpen} 
          closeMoyeoraJoinModal={closeMoyeoraJoinModal} 
        />

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
                <td className='quick_menu_td'>모임소개</td>
                <td className='quick_menu_td'>멤버소개</td>
                <td className='quick_menu_td'>안내사항</td>
                <td className='quick_menu_td'>모임후기</td>
                <td className='quick_menu_td'>문의사항</td>
                <td className='quick_menu_td' onClick={openMoyeoraJoinModal}>가입하기</td>
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
          <div className='moyeoraDetail_title'>
            모여라 소개 제목
          </div>
          <div className='moyeoraDetail_introduce_moyeora_inner'>
            모여라 소개
          </div>
        </div>
        <div className='moyeoraDetail_introduce_member'>
          <div className='moyeoraDetail_title'>
            멤버 소개
          </div>
          <div className='moyeoraDetail_introduce_member_inner'>
            {/* for 문 돌려야 됨 */}
            <div className='introduce_member'>
              <table className='introduce_member_table'>
                <tr className='introduce_member_tr'>
                  <td className='introduce_member_td_pircture' rowSpan={5}>
                    사진
                  </td>
                  <td className='introduce_member_info'>
                    멤버 설명
                  </td>
                </tr>
              </table>
            </div>

            <div className='introduce_member'>

            </div>
            <div className='introduce_member'>

            </div>
            <div className='introduce_member'>

            </div>
          </div>

          <div className='introduce_member_button'>
            <Button variant="outline-dark" size="lg">
              더보기 +
            </Button>
          </div>

        </div>
        <div className='moyeoraDetail_guide'>
          <div className='guide_people'>
            <BsPeopleFill className="guide_people_icon"/>
            guide_people
          </div>
          <div className='guide_date'>
            <IoMdTime className="guide_date_icon"/>
            guide_date
          </div>
          <div className='guide_place'>
            <MdOutlinePlace className="guide_place_icon"/>
            guide_place
          </div>
          <div className='guide_map'>
            지도 위치
          </div>
        </div>

        <div className='moyeoraDetail_visitorBook_list'>
          {/* for문 돌리기 */}
          <div className='moyeoraDetail_visitorBook_inner'>
            방명록
            <hr className='moyeoraDetail_visitorBook_hr'/>
          </div>
          {/* for문 돌리기 */}

          <div className='moyeoraDetail_visitorBook_list_button'>
            <Button variant="outline-dark" size="lg">
              더보기 +
            </Button>
          </div>
        </div>

        <div className='moyeoraDetail_question'>
          <div className='moyeoraDetail_title'>
              문의사항
          </div>
          <div className='question_write'>
            <FloatingLabel controlId="floatingTextarea2" label="문의사항">
							<Form.Control
								as="textarea"
								placeholder="Leave a comment here"
								style={{ height: '150px' }}
							/>
						</FloatingLabel>
          </div>
          <div className='question_write_button'>
            <Button variant="outline-dark" size="lg">
							등록하기
						</Button>
          </div>

          <div className='question_board'>
          <table className='question_board_table'>
            <tr className='question_board_tr'>
              <td className='question_board_td_qusetion'>답변상태</td>
              <td className='question_board_td_title'>제목</td>
              <td className='question_board_td_wirter'>작성자</td>
              <td className='question_board_td_date'>작성일</td>
            </tr>
            {/* for문 돌리기 */}
            <tr>
              <td className='question_board_td'>답변상태1</td>
              <td className='question_board_td'>제목1</td>
              <td className='question_board_td'>작성자1</td>
              <td className='question_board_td'>작성일1</td>
            </tr>
            <tr>
              <td className='question_board_td'>답변상태2</td>
              <td className='question_board_td'>제목2</td>
              <td className='question_board_td'>작성자2</td>
              <td className='question_board_td'>작성일2</td>
            </tr>
            {/* for문 돌리기 */}
          </table>
          </div>
          <div className='question_board_button'>
            <Button variant="outline-dark" size="lg">
              더보기 +
            </Button>
          </div>
        </div>

        <div className='moyeoraDetail_recommend'>
          <div className='moyeoraDetail_title'>
            이런 모임은 어떨까요?
          </div>
          <div className='moyeoraDetail_recommend_inner'>
            {/* for 문 돌려야 됨 */}
            <div className='recommend'>
              <table className='recommend_table'>
                <tr className='recommend_tr'>
                  <td className='recommend_td_pircture' rowSpan={5}>
                    사진
                  </td>
                  <td className='recommend_td_category'>
                    <div className='category'><span>카테고리</span></div>
                    <div className='category'><span>카테고리</span></div>
                  </td>
                </tr>
                <tr>
                  <td className='recommend_td_title'>
                    <span>제목</span>
                  </td>
                </tr>
                <tr>
                  <td className='recommend_td_count'>
                    <BsPeopleFill className="recommend_td_icon"/>
                    <span>인원 수</span>
                  </td>
                </tr>
                <tr>
                  <td className='recommend_td_date'>
                    <IoMdTime className="recommend_td_icon"/>
                    <span>시간</span>
                  </td>
                </tr>
                <tr>
                  <td className='recommend_td_place'>
                    <MdOutlinePlace className="recommend_td_icon"/>
                    <span>장소</span>
                  </td>
                </tr>
              </table>
            </div>
            {/* for 문 돌려야 됨 */}

            <div className='recommend'>

            </div>
          </div>
          <div className='recommend_button'>
            <Button variant="outline-dark" size="lg">
              더보기 +
            </Button>
          </div>
        </div>

      </div>
		</div>
	);
};

export default MoyeoraDetail;
