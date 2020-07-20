import React from 'react';
import { Input, Message, Button } from 'semantic-ui-react';



const UpdateEmail = ({ info }) => {

    return (
        <>
        <Message>Please enter a new email for your account below</Message>
        <Input size="large" placeholder={info} />
        <div className="btns-section">
            <Button className floated='right' primary>Update Email</Button>
            <Button floated='right' negative>Cancel</Button>
        </div>
        </>
    )
}


export default UpdateEmail;