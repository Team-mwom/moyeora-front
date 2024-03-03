import React from 'react';

import 'styles/bbusyeora/bbusyeoraToday.css'

const BbusyeoraToday = () => {
	return (
		<div className='bbusyeoraToday_full'>
      <div className='bbusyeoraToday_full_container'>
        <div className='bbusyeoraToday_title'>
          오늘의 뿌셔라 !
        </div>
        <div className='bbusyeoraToday_inner'>
          {/* for 문 돌려야 됨 */}
          <div className='bbusyeoraToday'>
            오늘의 뿌셔라
          </div>
          <div className='bbusyeoraToday'>
            오늘의 뿌셔라
          </div>
          <div className='bbusyeoraToday'>
            오늘의 뿌셔라
          </div>
          <div className='bbusyeoraToday'>
            오늘의 뿌셔라
          </div>
          <div className='bbusyeoraToday'>
            오늘의 뿌셔라
          </div>
          <div className='bbusyeoraToday'>
            오늘의 뿌셔라
          </div>
        </div>
        <div className='bbusyeoraToday_moreRead_container'>
          <div className='bbusyeoraToday_moreRead'>
            더보기 +
          </div>
        </div>
      </div>
		</div>
	);
};

export default BbusyeoraToday;