import React, { useState } from 'react';
import Tab from './Tab';

const Tabs = ({ children }:any) => {
  const [activeTab, setActiveTab] = useState(children[0].props.className);

  const handleTabClick = (tabLabel:any) => {
    setActiveTab(tabLabel);
  };

  return (
    <div className="tabs">
      {children.map((child:any) => (
        <Tab
          key={child.props.className}
          className={child.props.className}
          onClick={handleTabClick}
          activeTab={activeTab}
        />
      ))}
      <div className="tab-content">
        {children.map((child:any) =>
          child.props.className === activeTab ? child.props.children : null
        )}
      </div>
    </div>
  );
};

export default Tabs;