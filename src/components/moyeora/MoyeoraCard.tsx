import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Moyeora } from 'interface/MoyeoraInterface';

import { BsPeopleFill } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";

interface MoyeoraCardProps {
  moyeora: Moyeora;
}

const MoyeoraCard: React.FC<MoyeoraCardProps> = ({ moyeora }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${moyeora.myrSeq}`);
  };

  return (
    <div className='moyeoraCommon' onClick={handleCardClick}>
      <table className='moyeoraCommon_table'>
        <tbody>
          <tr className='moyeoraCommon_table_tr'>
            <td className='moyeoraCommon_table_td_pircture' rowSpan={5}>
              {moyeora.myrMainImg}
            </td>
            <td className='moyeoraCommon_table_category'>
              <div className='category'><span>{moyeora.categoryName}</span></div>
              <div className='category'><span>{moyeora.subCategoryName}</span></div>
            </td>
          </tr>
          <tr>
            <td className='moyeoraCommon_table_title'>
              <span>{moyeora.myrTitle}</span>
            </td>
          </tr>
          <tr>
            <td className='moyeoraCommon_table_count'>
              <BsPeopleFill className="moyeoraCommon_table_icon" />
              <span>{moyeora.myrMemberCnt} / {moyeora.myrMaxMember}</span>
            </td>
          </tr>
          <tr>
            <td className='moyeoraCommon_table_place'>
              <MdOutlinePlace className="moyeoraCommon_table_icon" />
              <span>{moyeora.myrPlace}</span>
            </td>
          </tr>
          <tr>
            <td className='moyeoraCommon_table_date'>
              <IoMdTime className="moyeoraCommon_table_icon" />
              <span>{moyeora.myrDate}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MoyeoraCard;
