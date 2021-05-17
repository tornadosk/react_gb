import React, { useState, useCallback } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';



const chats = [
    {
        name: 'Chat 1',
        id: 'chat1'
    },
    {
        name: 'Chat 2',
        id: 'chat2'
    }
];


export const ChatList = () => {
    // console.log(useParams());
    // console.log(useRouteMatch());






    return (
        <>
            <div>

                {chats.map((chat) => (

                    <Link to={`chats/${chat.id}`} key={chat.id} style={{ textDecoration: "none", color: "inherit" }}>
                        <ListItem button >
                            <ListItemText>
                                {chat.name}
                            </ListItemText>
                        </ListItem>
                    </Link>


                ))
                }


            </div >


        </>
    );
}


