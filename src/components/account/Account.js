import React from "react";
import { Segment, Image, Icon, Button, Label, Header } from 'semantic-ui-react';
import InfoBox from './InfoBox.js';

import { useSelector, useDispatch } from 'react-redux';

const Account = () => {

  const userInfo = useSelector(state => state.user.userInfo)
  console.log(userInfo)
  return (
    <>
      <Segment.Group size="huge">
        <Segment size="mini" >
          <div className="avatar-section">
            <div className="user-profile-img">
              <Icon color="orange" name="user" size='big' />
            </div>
            <Button color="orange" className="avatar-upload-btn" size="big" animated >
              <Button.Content visible>Upload Image</Button.Content>
              <Button.Content hidden><Icon size="large" name="upload" /></Button.Content>
            </Button>
          </div>
        </Segment>

      </Segment.Group>
      <InfoBox type="NAME" info={userInfo.username} />
      <InfoBox type="EMAIL" info={userInfo.email} />
      <InfoBox type="PASSWORD" info={"********"} />
    </>
  );
};

export default Account;
