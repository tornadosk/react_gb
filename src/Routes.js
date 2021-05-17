import React from 'react';
import { BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import App from './app';
import { ChatList } from './components/ChatList/ChatList';
import Profile from './components/Profile/Profile';
// import {Profile} from '';


// function BlogPost() {
//     let { slug } = useParams();
//     return <div>Now showing post {slug}</div>;
// }

export const Routes = () => {
    return (
        <BrowserRouter>
            <Grid item xs={12}>
                <Header>
                </Header>

            </Grid>

            <Switch>

                <Route path="/" exact>
                    <ChatList />
                </Route>
                <Route path="/chats/:chatId">
                    <App />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                {/* <Route path="/">
                    <App />
                </Route> */}
            </Switch>
        </BrowserRouter>
    )
}
