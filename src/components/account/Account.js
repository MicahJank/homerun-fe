import React, { useState } from "react";
import { Segment, Image, Icon, Button, Label, Header, Message, Transition } from 'semantic-ui-react';
import InfoBox from './InfoBox.js';

import { useSelector, useDispatch } from 'react-redux';

const Account = () => {
  const [message, setMessage] = useState('')
  const userInfo = useSelector(state => state.user.userInfo)

  const handleDismiss = () => {
    setMessage('')
  }

  return (
    <>
      <Segment.Group size="huge">
        <Segment className="account-page-top" size="mini" >
          <div className="avatar-section">
            <div className="user-profile-img">
              <Icon color="orange" name="user" size='big' />
            </div>
            <Button color="orange" className="avatar-upload-btn" size="big" animated >
              <Button.Content visible>Upload Image</Button.Content>
              <Button.Content hidden><Icon size="large" name="upload" /></Button.Content>
            </Button>
          </div>
          <Transition visible={message ? true : false} animation='fade down' duration={500}>
            <Message onDismiss={handleDismiss} positive hidden={message ? false : true} className="account-page-message">
              <Message.Header>This is your friendly neighborhood message</Message.Header>
              <p>{message}</p>
            </Message>
          </Transition>
        </Segment>

      </Segment.Group>
      <InfoBox type="NAME" info={userInfo.username} setMessage={setMessage} />
      <InfoBox type="EMAIL" info={userInfo.email} setMessage={setMessage} />
      <InfoBox type="PASSWORD" info={"********"} setMessage={setMessage} />
    </>
  );
};

export default Account;
