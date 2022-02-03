import React from 'react';
import CowListItem from './CowListItem.jsx';

const CowList = (props) => (
  <div className="cow-list">
      {props.cows.map((cow, i) => (
        <CowListItem cow={cow} key={i} />
      )
    )}
  </div>
);

export default CowList;
