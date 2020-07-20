import React from 'react';
import { Input, Message, Button } from 'semantic-ui-react';


const UpdateName = ( { info } ) => {

    return (
        <>
        <Message>Please enter a new name for your account below</Message>
        <Input size="large" placeholder={info} />
        <div className="btns-section">
            <Button className floated='right' primary>Update Name</Button>
            <Button floated='right' negative>Cancel</Button>
        </div>
        </>
    )
}


export default UpdateName;