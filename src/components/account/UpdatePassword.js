import React from 'react';
import { Input, Message, Button, Form } from 'semantic-ui-react';



const UpdatePassword = ({ info, setModalOpen }) => {

    return (
        <>
        <Message>Please enter a new password for your account below</Message>
        <Form size={"large"}>
            <Form.Input type="password" required placeholder="Current Password" />
            <Form.Input type="password" required placeholder="New Password" />
        </Form>
        <div className="btns-section">
            <Button className floated='right' primary>Update Password</Button>
            <Button onClick={() => setModalOpen(false)} floated='right' negative>Cancel</Button>
        </div>
        </>
    )
}


export default UpdatePassword;