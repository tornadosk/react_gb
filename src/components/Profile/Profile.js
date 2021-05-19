import { Button, ListItem, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProfileName } from '../../store/profile/actions';
import { v4 as uuidv4 } from 'uuid';

const Profile = () => {

    const userName = useSelector(state => state.profile.profileName);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleAddName = () => {
        if (value) {
            dispatch(addProfileName(value));
            setValue('');
        }
    }
    const [lastItem] = userName.slice(-1)
    return (
        <div>
            This is your Profile Page,
            <ListItem>{lastItem} </ListItem>
            <ListItem>
                <TextField value={value} onChange={handleChange} />
                <Button onClick={handleAddName}>Add your name</Button>
            </ListItem>
        </div>
    )
}

export default Profile
