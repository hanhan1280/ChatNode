import React from 'react';
import ReactEmoji from 'react-emoji';

import './MsgBubble.css'

const MsgBubble = ({ message: { text, user }, name }) => {
    const name2 = name.trim().toLowerCase();
    var thisUser = (user === name2);
    return (
        (thisUser) ?
            (
                <div className="msgContainer justifyEnd">
                    <p className="sentText pr-10">{name2}</p>
                    <div className="msgBubble backgroundBlue">
                        <p className="msgText colorWhite">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            )
            : (
                <div className="msgContainer justifyStart">
                    <div className="msgBubble backgroundLight">
                        <p className="msgText colorDark">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="sentText pl-10 ">{user}</p>
                </div>
            )
    );
}

export default MsgBubble;