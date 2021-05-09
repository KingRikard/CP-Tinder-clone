import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: '...',
            message: 'Whats up darlin'
        },
        {
            name: 'Ellen',
            image: '...',
            message: 'Whats going on toniiidghtE> darlin'
        }, 
        {
            message: 'Whats up dThird message'
        }
    ])

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}])
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with Ellen on 2008-10-14</p>
            {messages.map((messages) => (
                messages.name ? (
                    <div className="chatScreen__message">
                    <Avatar 
                    className="chatScreen__image"
                    alt={messages.name}
                    src={messages.image}
                    />
                    <p className="chatScreen__text">
                        {messages.message}
                    </p>
                </div>

                ) : (
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">
                        {messages.message}
                    </p>
                </div>

                )


            ))}

            
            <form className="chatScreen__input">
                <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                className="chatScreen__inputField"
                placeholder="Type a message..."
                type="text" />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton" >SEND</button>
            </form>


        </div>
        
    );
}

export default ChatScreen