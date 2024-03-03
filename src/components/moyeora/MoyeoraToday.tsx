import React from 'react';

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