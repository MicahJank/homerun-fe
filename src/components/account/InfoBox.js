import React from 'react';

import { Header, Button, Modal } from 'semantic-ui-react';
import AccountModal from './AccountModal';


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
            <Modal trigger={<Button className="edit">Edit</Button>} centered={false}>
                <AccountModal name={type} info={info} />
            </Modal>
            </Header.Content>
      </Header>
    )
}


export default InfoBox;