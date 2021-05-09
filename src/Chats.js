
import React from 'react';
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
        <Chat
            name="Mark"
            message="Yo, whats up boiiii"
            timestamp="40 seconds ago"
            profilePic="..."
        />
        <Chat
            name="Susan"
            message="Yo, whats up homeboiii"
            timestamp="4 minutes ago"
            profilePic="..."
        />
        <Chat
            name="ChillerBee"
            message="Yo, whats up dog"
            timestamp="34 minutes ago"
            profilePic="..."
        />
        </div>
    )
}

export default Chats;
