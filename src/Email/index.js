import React from 'react';

function MailTo(props) {
  var x = window.matchMedia("(max-width: 700px)")
  let displayEmail;
  if (x.matches) {
    displayEmail = <i style={{fontSize: "36px", justifySelf: "center"}} class="fas fa-envelope-square"></i>
  } else {
    displayEmail = props.email 
  }
  return <a href={`mailto:${props.email}`}>{displayEmail}</a>
}

export default MailTo;
