import React, { useCallback, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { Header } from './components/Header/Header';
import MessageField from './components/MessageField/MessageField';
import { ChatList } from './components/ChatList/ChatList';
import Profile from './components/Profile/Profile';
import { MarketPage } from './components/MarketPage/marketPage';

export const Routes = () => {

    return (
        <BrowserRouter>
            <Grid item xs={12}>
                <Header />
            </Grid>

            <Switch>
                <Route path="/" exact>
                    <ChatList />
                </Route>
                <Route path="/chats/:chatId?">
                    <MessageField />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/marketpage">
                    <MarketPage />
                </Route>
                <Route>
                    <div>This is my 404</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
