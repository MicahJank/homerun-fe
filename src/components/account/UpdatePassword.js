import React, { useState } from 'react';
import { Input, Message, Button, Form } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions';
import axiosWithAuth from '../../utils/AxiosWithAuth';


const UpdatePassword = ({ info, setModalOpen }) => {
    const memberId = useSelector(state => state.user.userInfo.member_id);
    const [passwordInfo, setPasswordInfo] = useState({ oldPassword: '', newPassword: '', memberId });
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (e, data) => {
        setPasswordInfo({...passwordInfo, [data.name]: data.value })
    }
    
    const handleUpdate = () => {
        console.log(passwordInfo)
        setLoading(true)
        axiosWithAuth().put('/auth/update-password', passwordInfo)
            .then(res => {
                alert("Password has been updated")
                console.log(res);
                setPasswordInfo({ oldPassword: '', newPassword: '', memberId })
                setLoading(false)
                setModalOpen(false)
            })
            .catch(err => {
                setLoading(false)
                console.log(err);
            })
    }


    return (
        <>
        <Message>Please enter a new password for your account below</Message>
        <Form loading={loading} size={"large"}>
            <Form.Input onChange={handleChange} name="oldPassword" type="password" required placeholder="Current Password" />
            <Form.Input onChange={handleChange} name="newPassword" type="password" required placeholder="New Password" />
        </Form>
        <div className="btns-section">
            <Button loading={loading} onClick={handleUpdate} floated='right' primary>Update Password</Button>
            <Button onClick={() => setModalOpen(false)} floated='right' negative>Cancel</Button>
        </div>
        </>
    )
}


export default UpdatePassword;