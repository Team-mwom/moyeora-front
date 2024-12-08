import React from 'react';
import Modal from "react-modal";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import 'styles/moyeora/moyeoraDetail.css';

interface MoyeoraJoinModalProps {
  isOpen: boolean;
  closeMoyeoraJoinModal: () => void;
}

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  content: {
    width: "55%",
    height: "800px",
    margin: "auto",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    padding: "20px"
  }
};

const MoyeoraJoinModal: React.FC<MoyeoraJoinModalProps> = ({ isOpen, closeMoyeoraJoinModal }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeMoyeoraJoinModal} style={customStyles}>
      <div className='moyeoraJoin_full'>
        <div className='moyeoraJoin_guide_title'>
          모두가 즐거운 모임이 될 수 있도록 함께 지켜주세요!
        </div>
        <div className='moyeoraJoin_guide_info'>
          <table className=''>
            <tbody>
              <tr className=''>
                <td className=''>1. 모임 시작 전 부득이하게 참여가 어려워진 경우, 반드시 호스트에게 미리 알려주세요!</td>
              </tr>
              <tr className=''>
                <td className=''>2. 함께하는 멤버들은 존중하는 태도를 지켜주세요!</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='moyeoraDetail_title'>
          <div className='title_pic'>
            사진
          </div>

          <div className='title_info_container'>
            <table className='title_info_table'>
              <tbody>
                <tr className=''>
                  <td className='moyeoraJoin_title_info_td_title'>
                    모여라 제목
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CreateMoyeora.tsx 질문사항과 연관된 부분 */}
        <div className='moyeoraJoin_question'>
          <div className='moyeoraJoin_question_title'>
            질문답변
          </div>
          <InputGroup size="lg">
            <Form.Control
              placeholder="질문을 입력해주세요 !"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </div>
        <div className='moyeoraJoin_question'>
          <div className='moyeoraJoin_question_title'>
            질문답변
          </div>
          <InputGroup size="lg">
            <Form.Control
              placeholder="질문을 입력해주세요 !"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </div>
        <div className='moyeoraJoin_question'>
          <div className='moyeoraJoin_question_title'>
            질문답변
          </div>
          <InputGroup size="lg">
            <Form.Control
              placeholder="질문을 입력해주세요 !"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </div>
        {/* CreateMoyeora.tsx 질문사항과 연관된 부분 */}

        <div className='moyeoraJoin_check'>
          무단으로 불참하거나, 함께하는 멤버에게 피해를 주는 경우 신고 제도를 통해 이용에 제재를 받게됩니다.
          <br />
          이용 규칙을 지키겠습니다. 
          <Form.Check className='moyeoraJoin_checkbox'/>
        </div>

        <hr />

        <div className='moyeoraJoin_button'>
          <Button variant="outline-dark" size="lg">
            신청하기
          </Button>
          <Button variant="outline-dark" size="lg" onClick={closeMoyeoraJoinModal}>
            닫기
          </Button>
        </div>

      </div>
    </Modal>
  );
};

export default MoyeoraJoinModal;
