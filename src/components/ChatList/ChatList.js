import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ChatList = () => {
    return (
        <div>
            <ListItem button>
                <ListItemText primary="Chat $1" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Chat $2" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Chat $3" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Chat $4" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Chat $5" />
            </ListItem>

        </div>
    )
}
export default ChatList
