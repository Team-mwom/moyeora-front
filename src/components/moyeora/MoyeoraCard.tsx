import React from 'react';

import { Moyeora } from 'interface/MoyeoraInterface';

import { BsPeopleFill } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { MdOutlinePlace } from "react-icons/md";

interface MoyeoraCardProps {
  moyeora: Moyeora;
}

const MoyeoraCard: React.FC<MoyeoraCardProps> = ({ moyeora }) => {
  return (
    <div className='moyeoraCommon'>
      <table className='moyeoraCommon_table'>
        <tbody>
          <tr className='moyeoraCommon_table_tr'>
            <td className='moyeoraCommon_table_td_pircture' rowSpan={5}>
              사진
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
              <span>{moyeora.myrCurrentMember} / {moyeora.myrMaxMember}</span>
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
