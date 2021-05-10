import React, { useState } from 'react';
import {AUTHORS} from '../utils/constants';

export const MessageField = ({onAddMessage}) => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddMessage({author: AUTHORS.HUMAN, text});
        setText('');
    }

    return (
        
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleChange} />
                <input type="submit" />
            </form>
        );
}


