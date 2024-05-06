// RecommendedList.js

import React from 'react';
import Items from '../Items/Items';

function RecommendedList({ recommendations }) {
  return (
    <div>
      <h2>Recommended</h2>
      <Items accommodations={recommendations} />
    </div>
  );
}

export default RecommendedList;
