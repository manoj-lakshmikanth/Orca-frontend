import React, { useContext, useState } from 'react';
import ApproverSidebar from './ApproverSidebar';
import ApproverHeader from './ApproverHeader';
import ApproverSection from './ApproverSection';
import ApproverDetails from './ApproverDetails';
import userContext from '../Context';

const ApproverHome = () => {
  const { showSpec } = useContext(userContext);
  const [clickID, setClickID] = useState('');
  // console.log(clickID);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        columnGap: '3%',
      }}
    >
      <ApproverSidebar />
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          rowGap: '50px',
        }}
      >
        <ApproverHeader />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <ApproverSection clickID={clickID} setClickID={setClickID} />
          {showSpec ? (
            <ApproverDetails clickID={clickID} setClickID={setClickID} />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApproverHome;
