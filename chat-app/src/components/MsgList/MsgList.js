import React from 'react';
import ScollToBottom from 'react-scroll-to-bottom';
import Msgbubble from '../MsgBubble/MsgBubble';

import './MsgList.css'

const MsgList = ({messages,name})=>{
    return (
        <ScollToBottom className="msglist">
            {messages.map((message,i)=><div key={i}><Msgbubble message={message} name={name}/></div>)}
        </ScollToBottom>
    );
}

export default MsgList;