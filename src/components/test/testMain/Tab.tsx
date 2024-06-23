
import React from 'react';

const Tab = ({ className, activeTab, onClick }:any) => {
  const handleClick = () => {
    onClick(className);
  };

  return (
    <div
      className={`tab ${activeTab === className ? 'active' : ''}`}
      onClick={handleClick}
    >
      {className}
    </div>
  );
};

export default Tab;