import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';

import Myheader from '../MyHeader/MyHeader';
import Input from '../Input/Input';
import Msglist from '../MsgList/MsgList';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:3000';
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        console.log(name + "," + room)
        socket = io(ENDPOINT)

        setRoom(room);
        setName(name)
        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('send-message', message, () => setMessage(''));
        }
    }

    return (
        <div className="COutContainer">
            <div className="CInContainer">
                <Myheader room={room}/>                
                <Msglist messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    );
}

export default Chat;