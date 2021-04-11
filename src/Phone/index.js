import React from 'react';

function Phone(props) {
  return <a href={`tel:${props.phone}`}>{props.phone}</a>
}

export default Phone;