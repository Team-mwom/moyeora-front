import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import 'styles/main/mainCreateMoyeora.css'

const MainCreateMoyeora = () => {
  const navigate = useNavigate();

  const linkCreateMoyeora = useCallback(
		(e:React.MouseEvent<HTMLElement>) => {
			navigate("/createMoyeora");
	}
	, []);


	return (
		<div className='mainCreateMoyeora_full'>
			<div className='mainCreateMoyeora_full_container'>
        <div className='mainCreateMoyeora_info'>
          마음에 드는 모임이 없나요?
          <br />
          직접 만들어보세요 !
        </div>

        <div className='mainCreateMoyeora_create_moyeora'>
          <Button variant="outline-dark" size="lg" className='button' onClick={linkCreateMoyeora}>
            다들 모여봐 !
          </Button>
        </div>
			</div>
		</div>
	);
};

export default MainCreateMoyeora;
