import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Redirect, useRouteMatch } from 'react-router-dom';
import { MessageField } from './components/MessageField/MessageField';
import { AUTHORS } from './utils/constants';
import { ChatList } from './components/ChatList/ChatList';

import { Grid, Divider } from '@material-ui/core';
import useStyles from './styles';



// const initialMessages = [
//     { author: AUTHORS.HUMAN, text: "Hi" },
//     { author: AUTHORS.BOT, text: "hello" },
// ];

const initialMessages = {
    chat1: [{ author: AUTHORS.HUMAN, text: "Hi" }],
    chat2: [{ author: AUTHORS.BOT, text: "hello" }],
};

const getMessageClassName = (author) => {
    return `message ${author === AUTHORS.BOT ? "bot-message" : "human-message"}`;
};

const App = () => {
    const classes = useStyles();

    const [messages, setMessages] = useState(initialMessages);


    console.log(useParams());
    console.log(useRouteMatch());
    const params = useParams();
    console.log(params);

    const { chatId } = params;
    console.log(chatId);

    const handleAddMessages = useCallback(
        (newMessage) => {
            setMessages((prevMessages) => ({
                ...prevMessages,
                [chatId]: [...prevMessages[chatId], newMessage]
            }));
        },
        [chatId]
    );

    useEffect(() => {
        let timeout;
        if (!messages[chatId]?.length) {
            return;
        }
        const lastMessage = messages[chatId][messages[chatId].length - 1];
        if (lastMessage.author === AUTHORS.HUMAN) {
            timeout = setTimeout(() => {
                handleAddMessages({ author: AUTHORS.BOT, text: "I'am Bot" });
            }, 1500);

        }

        return () => clearTimeout(timeout);
    }, [messages]);

    if (!chatId || !messages[chatId]) {
        return <Redirect to="/" />
    }

    return (
        <>
            <Grid container spacing={3}>

                <Grid item xs={3}>
                    <ChatList></ChatList>
                </Grid>
                <Grid item xs={8}>
                    <div className={classes.flex}>
                        {messages[chatId].map((message, i) => (
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