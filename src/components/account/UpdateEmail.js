import React, { useState } from 'react';
import { Input, Message, Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../actions';
import axiosWithAuth from '../../utils/AxiosWithAuth';


const UpdateEmail = ({ info, setModalOpen, setMessage }) => {
    const [email, setEmail] = useState('');
    const loading = useSelector(state => state.user.loading);
    const userInfo = useSelector(state => state.user.userInfo);
    const [errorHidden, setErrorHidden] = useState(true);
    const [inputError, setInputError] = useState(false);
    const [errorInfo, setErrorInfo] = useState("");


    const handleChange = (e, data) => {
        setInputError(false)
        setEmail(data.value)
    }
    
    const handleUpdate = () => {
        // check the data the user is submitting to see if it is in valid email format
        if (!email) {
            setErrorInfo("Invalid email. Email field cannot be blank.")
            setErrorHidden(false);
            setInputError(true);
            return
        }
        if (!email.includes('@')) {
            setErrorInfo("Invalid email. Missing '@'.")
            setErrorHidden(false);
            setInputError(true);
            return
        }
        axiosWithAuth().put('/members/update-email', { email, memberId: userInfo.member_id })
            .then(res => {
                setInputError(false);
                setErrorInfo('')
                setErrorHidden(true)
                setMessage("A confirmation Email has ben sent to the given email address, please check your email for more information.") 
                setModalOpen(false)
            })
            .catch(err => {
                setInputError(true);
                setErrorInfo(err.response.data.message)
                setErrorHidden(false)
                console.log(err.response);
            })
    }

    return (
        <>
        <Message>Please enter a new email for your account below</Message>
        <Message error hidden={errorHidden}>{errorInfo}</Message>
        <Input error={inputError} onChange={handleChange} type="email" size="large" placeholder={info} />
        <div className="btns-section">
            <Button onClick={handleUpdate} floated='right' primary>Update Email</Button>
            <Button onClick={() => setModalOpen(false)} floated='right' negative>Cancel</Button>
        </div>
        </>
    )
}


export default UpdateEmail;