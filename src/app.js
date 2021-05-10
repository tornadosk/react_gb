import React, {useState, useEffect} from 'react';
import {MessageField} from './components/MessageField';
import {AUTHORS} from './utils/constants';

const initialMessages = [
    {author: AUTHORS.HUMAN, text: "Hi"},
    {author: AUTHORS.BOT, text:"hello"},
];

const App = () => {

    const [messages, setMessages] = useState(initialMessages);

    const handleAddMessages = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    useEffect(() => {
        if(!messages.length) {
            return;
        }
        const lastMessage= messages[messages.length -1];
        if (lastMessage.author === AUTHORS.HUMAN){
            handleAddMessages({author: AUTHORS.BOT, text: "I'am Bot"})
        }
    }, [messages]);

    return (
        <div>
            <h1>Hello</h1>
            {messages.map((message) => (
                <div className={`message ${message.author === AUTHORS.BOT ? 'bot-message' : 'human-message'}`}>
                    {message.author}: {message.text}
                </div>
            ))}
            <MessageField onAddMessage={handleAddMessages}/> 
        </div>
    );
    
};

export default App;