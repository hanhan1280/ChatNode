import React from 'react';
import './MyHeader.css';

import {MdArrowBack} from "react-icons/md";

const MyHeader = ({ room }) => (
    <div className="myHeader">
      <div className="HeaderContainerL">
        <a href="/"><MdArrowBack/></a>
      </div>
      <div className="HeaderContainerR">        
        <h3>{room}</h3>
      </div>
      
    </div>
  );
  
  export default MyHeader;