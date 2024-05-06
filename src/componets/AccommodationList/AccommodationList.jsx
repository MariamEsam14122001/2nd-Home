import React from 'react';
import Items from '../Items/Items';


function AccommodationsList({ accommodations }) {
  return (
    <div>
      
      <Items accommodations={accommodations} />
    </div>
  );
}

export default AccommodationsList;