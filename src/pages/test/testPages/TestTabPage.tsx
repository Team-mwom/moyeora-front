import React, { useState } from 'react';
import Tabs from 'components/test/testMain/Tabs';

const TestTabPage = () => {
 return (
    <div className="App">
      <Tabs>
       <div className="Tab 1">
          <p>Content for Tab 1</p>
        </div>
        <div className="Tab 2">
          <p>Content for Tab 2</p>
        </div>
        <div className="Tab 3">
          <p>Content for Tab 3</p>
        </div>
      </Tabs>
    </div>
  );
}

export default TestTabPage;