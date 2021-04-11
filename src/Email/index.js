import React from 'react';

function MailTo(props) {
  return <a href={`mailto:${props.email}`}>{props.email}</a>
}

export default MailTo;
