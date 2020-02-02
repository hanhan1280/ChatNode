import React from 'react';

import './Input.css';

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
            <button className="send" onClick={e => sendMessage(e)}>Send</button>
        </form>
    )
}

export default Input;