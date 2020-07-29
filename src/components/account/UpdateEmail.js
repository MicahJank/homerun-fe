import React, { useState } from 'react';
import { Input, Message, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../actions';
import axiosWithAuth from '../../utils/AxiosWithAuth';


const UpdateEmail = ({ info, setModalOpen }) => {
    const [email, setEmail] = useState('');
    const loading = useSelector(state => state.user.loading);
    const userInfo = useSelector(state => state.user.userInfo);


    const handleChange = (e, data) => {
        setEmail(data.value)
    }
    
    const handleUpdate = () => {
        axiosWithAuth().put('/members/update-email', { email, memberId: userInfo.member_id })
            .then(res => {
                alert("Email has ben sent")
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
        <Message>Please enter a new email for your account below</Message>
        <Input onChange={handleChange} size="large" placeholder={info} />
        <div className="btns-section">
            <Button onClick={handleUpdate} floated='right' primary>Update Email</Button>
            <Button onClick={() => setModalOpen(false)} floated='right' negative>Cancel</Button>
        </div>
        </>
    )
}


export default UpdateEmail;