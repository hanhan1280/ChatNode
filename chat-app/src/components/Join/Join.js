import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="JOutContainer">
            <div className="JInContainer">
                <h1 className="header">Join a Room</h1>
                <div>
                    <input placeholder="Name" className="input" type="text" onChange={function(event){setName(event.target.value)}} />
                </div>
                <div>
                    <input placeholder="Room" className="input mt-20" type="text" onChange={function(event){setRoom(event.target.value)}} />
                </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className='button mt-20' type="submit">submit</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;