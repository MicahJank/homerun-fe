import React from 'react';

import { Header, Button } from 'semantic-ui-react';


const InfoBox = ({ type, info }) => {

    return (
        <Header as="h4" dividing>
            <Header.Content className="type">
            {type}
            </Header.Content>
            <Header.Content className="info">
            {info}
            </Header.Content>
            <Header.Content>
            <Button className="edit">Edit</Button>
            </Header.Content>
      </Header>
    )
}


export default InfoBox;