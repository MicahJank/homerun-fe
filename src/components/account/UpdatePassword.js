import React from 'react';
import { Input, Message, Button, Form } from 'semantic-ui-react';



const UpdatePassword = ({ info, setModalOpen }) => {
// TODO backend is ready to go mostly - just need to get the front end hitting the backend api and updating the password
    return (
        <>
        <Message>Please enter a new password for your account below</Message>
        <Form size={"large"}>
            <Form.Input type="password" required placeholder="Current Password" />
            <Form.Input type="password" required placeholder="New Password" />
        </Form>
        <div className="btns-section">
            <Button floated='right' primary>Update Password</Button>
            <Button onClick={() => setModalOpen(false)} floated='right' negative>Cancel</Button>
        </div>
        </>
    )
}


export default UpdatePassword;