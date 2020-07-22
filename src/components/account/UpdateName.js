import React, { useState } from 'react';
import { Input, Message, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../actions';

const UpdateName = ( { info, setModalOpen } ) => {
    const [userName, setUserName] = useState({ username: info });
    const loading = useSelector(state => state.user.loading);
    const dispatch = useDispatch();

    const handleChange = (e, data) => {
        setUserName({ username: data.value })
    }
    
    const handleUpdate = () => {
        dispatch(actions.user.updateUserName(userName));
        setModalOpen(false);
    }

    return (
        <>
        <Message>Please enter a new name for your account below</Message>
        <Input loading={loading} onChange={handleChange} type="text" size="large" placeholder={info} />
        <div className="btns-section">
            <Button onClick={handleUpdate} className floated='right' primary>Update Name</Button>
            <Button onClick={() => setModalOpen(false)} floated='right' negative>Cancel</Button>
        </div>
        </>
    )
}


export default UpdateName;