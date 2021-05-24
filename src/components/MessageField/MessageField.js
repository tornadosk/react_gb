import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Message } from '../Message/Message';
import { AUTHORS } from '../../utils/constants';
import { ChatList } from '../ChatList/ChatList';
import { Grid, Divider } from '@material-ui/core';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { AddIsUpdateWithThunk, addMessage, AddMessageWithThunk } from '../../store/messages/actions';

const getMessageClassName = (author) => {
    return `message ${author === AUTHORS.BOT ? "bot-message" : "human-message"}`;
};

const MessageField = () => {
    const messages = useSelector(state => state.messages.messagesList);
    const dispatch = useDispatch();

    const classes = useStyles();
    const { chatId } = useParams();

    const handleAddMessage = useCallback(
        (newMessage) => {
            // onAddMessage(newMessage, chatId)
            dispatch(AddMessageWithThunk(newMessage, chatId));
            [chatId, dispatch]
        }
    );
    const status = true;

    // const handleUpdate = useCallback(
    //     () => {

    //         dispatch(AddIsUpdateWithThunk(chatId, status));
    //         [chatId, dispatch]
    //     }
    // );

    // useEffect(() => {
    //     let timeout;
    //     if (!messages[chatId]?.length) {
    //         return;
    //     }
    //     const lastMessage = messages[chatId]?.[messages[chatId]?.length - 1];
    //     if (lastMessage.author === AUTHORS.HUMAN) {
    //         timeout = setTimeout(() => {
    //             handleAddMessage({ author: AUTHORS.BOT, text: "I'am Bot" });
    //         }, 1500);

    //     }

    //     return () => clearTimeout(timeout);
    // }, [messages]);

    if (!chatId || !messages[chatId]) {
        return <Redirect to="/" />
    }

    return (
        <>
            <Grid container spacing={3}>

                <Grid item xs={3}>
                    <ChatList />
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
                    <Message onAddMessage={handleAddMessage} />
                </Grid>
            </Grid>

        </>
    );

};

export default MessageField;