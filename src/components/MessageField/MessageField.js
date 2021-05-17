import React, { useEffect, useState, useRef } from 'react';
import { AUTHORS } from '../../utils/constants';
import { TextField, Button } from '@material-ui/core';
import useStyles from './styles';


export const MessageField = ({ onAddMessage }) => {
    const [text, setText] = useState('');
    const input = useRef();

    const classes = useStyles();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddMessage({ author: AUTHORS.HUMAN, text });
        setText('');
    }
    useEffect(() => {
        input.current.focus();
    }, []);

    return (

        <form className={classes.form} onSubmit={handleSubmit}>
            {/* <input type="text" ref={input} /> */}
            <TextField
                id="standard-basic"
                value={text}
                onChange={handleChange}
                label="Enter your message"
                inputRef={input}
                size="medium"
                variant="outlined"
                className={classes.field}
            // fullWidth="true"

            />

            <Button
                type="submit"
                variant="outlined"
                color="inherit"
                className={classes.button}>
                Send
                </Button>

        </form>
    );
}


