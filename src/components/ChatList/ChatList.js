import React, { useState, useCallback } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../../store/chats/actions';

export const ChatList = () => {
    const chats = useSelector(state => state.chats.chatList);
    const newMessage = useSelector(state => state.messages.isUpdate);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleAddChat = () => {
        if (value) {
            dispatch(addChat({ name: value, id: uuidv4() }));
            setValue('');
        }
    }
    //
    //     const getChatClass = (newMessage) => {

    //         newMessage.map(chatStutus) => (
    //                 if (!chatStatus.isUpdate) {
    //     return `newUpdate`
    // }
    //             )}
    // }className={getChatClass(chat.id)}

    return (
        <>
            <div>
                {chats.map((chat) => (
                    <Link to={`/chats/${chat.id}`} key={chat.id} style={{ textDecoration: "none", color: "inherit" }} >
                        <ListItem button >
                            <ListItemText>
                                {chat.name}
                            </ListItemText>
                        </ListItem>
                    </Link>
                ))
                }
            </div >
            <ListItem>
                <TextField value={value} onChange={handleChange} />
                <Button onClick={handleAddChat}>Add Chat</Button>
            </ListItem>
        </>
    );
}


