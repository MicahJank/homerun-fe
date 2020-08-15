import React, { useState } from 'react';

import { Header, Button, Modal } from 'semantic-ui-react';
import AccountModal from './AccountModal';
import { set } from 'react-ga';


const InfoBox = ({ type, info, setMessage }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Header as="h4" dividing>
            <Header.Content className="type">
            {type}
            </Header.Content>
            <Header.Content className="info">
            {info}
            </Header.Content>
            <Header.Content>
            <Modal onClose={() => setModalOpen(false)} open={modalOpen} trigger={<Button onClick={() => setModalOpen(true)} className="edit">Edit</Button>} centered={false}>
                <AccountModal setMessage={setMessage} setModalOpen={setModalOpen} name={type} info={info} />
            </Modal>
            </Header.Content>
      </Header>
    )
}


export default InfoBox;