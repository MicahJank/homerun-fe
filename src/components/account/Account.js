import React from "react";
import { Row, Col } from "antd";
import { Segment, Image, Icon, Button, Label, Header } from 'semantic-ui-react';
import ChildAccountDropdown from "./ChildAccountDropdown";

const Account = () => {
  return (
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

      <Header as="h4" dividing>
        <Header.Content>
        NAME
        </Header.Content>
        <Header.Content>
        NAME
        </Header.Content>
        <Header.Content>
        NAME
        </Header.Content>
      </Header>
      <Header as="h4" dividing>
        <Header.Content>
          EMAIL
        </Header.Content>
        <Header.Content>
          EMAIL
        </Header.Content>
        <Header.Content>
          EMAIL
        </Header.Content>
      </Header>
      <Header as="h4" dividing>
        <Header.Content>
          PASSWORD
        </Header.Content>
        <Header.Content>
          PASSWORD
        </Header.Content>
        <Header.Content>
          PASSWORD
        </Header.Content>
      </Header>
    </Segment.Group>
  );
};

export default Account;
