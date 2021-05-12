import React, { useState, useEffect } from 'react';
import { MessageField } from './components/MessageField/MessageField';
import { AUTHORS } from './utils/constants';
import ChatList from './components/ChatList/ChatList';
import Header from './components/Header/Header';
import { Grid, Divider } from '@material-ui/core';
import useStyles from './styles';


const initialMessages = [
    { author: AUTHORS.HUMAN, text: "Hi" },
    { author: AUTHORS.BOT, text: "hello" },
];

const getMessageClassName = (author) => {
    return `message ${author === AUTHORS.BOT ? "bot-message" : "human-message"}`;
};

const App = () => {
    const classes = useStyles();

    const [messages, setMessages] = useState(initialMessages);

    const handleAddMessages = (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    useEffect(() => {
        if (!messages.length) {
            return;
        }
        const lastMessage = messages[messages.length - 1];
        if (lastMessage.author === AUTHORS.HUMAN) {
            handleAddMessages({ author: AUTHORS.BOT, text: "I'am Bot" })
        }
    }, [messages]);

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Header></Header>
                </Grid>
                <Grid item xs={3}>
                    <ChatList></ChatList>
                </Grid>
                <Grid item xs={8}>
                    <div className={classes.flex}>
                        {messages.map((message, i) => (
                            <div key={i} className={getMessageClassName(message.author)}>
                                {message.author}: <Divider></Divider>{message.text}
                            </div>
                        ))}
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <MessageField onAddMessage={handleAddMessages} />
                </Grid>
            </Grid>

        </>
    );

};

export default App;