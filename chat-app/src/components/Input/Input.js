import React from 'react';

import './Input.css';
import { IoIosSend } from "react-icons/io";

const Input = ({message, setMessage, sendMessage}) => {
    return (
        <form className="inputForm">
            <input
                className="msgInput"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={({ target: { value } }) => setMessage(value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="send eff" onClick={e => sendMessage(e)}><IoIosSend className="large"/></button>
        </form>
    )
}

export default Input;