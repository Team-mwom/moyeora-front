import React, { useState } from 'react';
import Modal from "react-modal";

import 'styles/moyeora/moyeoraMainImg.css'
const MoyeoraMainImg = ({img,size }:any) => {
  

	return (
		<div className='MoyeoraMainImg_container'>
      <img className='MoyeoraMainImg' src={img} ></img>
		</div>
	);
};

export default MoyeoraMainImg;
