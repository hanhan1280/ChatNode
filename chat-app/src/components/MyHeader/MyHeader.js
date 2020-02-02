import React from 'react';
import './MyHeader.css';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

const MyHeader = ({ room }) => (
    <div className="myHeader">
      <div className="HeaderContainerL">
        <img className="onlineIcon" src={onlineIcon} alt="online" />
        <h3>{room}</h3>
      </div>
      <div className="HeaderContainerR">
        <a href="/"><img src={closeIcon} alt="close" /></a>
      </div>
      
    </div>
  );
  
  export default MyHeader;