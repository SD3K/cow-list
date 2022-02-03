import React from 'react';

const CowListItem = (props) => (
  <div className="cow-list-item">
    {props.cow.cowname}
  </div>
);

export default CowListItem;
