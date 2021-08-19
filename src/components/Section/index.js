import React from 'react';

import './styles.scss';

function Section(props){
  return (
    <div className="section-container">{props.children}</div>
  );
}

export default Section;