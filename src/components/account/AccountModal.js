import React from 'react';

import { Modal, Image, Header, Input } from 'semantic-ui-react';

import UpdateName from './UpdateName.js';
import UpdateEmail from './UpdateEmail.js';
import UpdatePassword from './UpdatePassword.js';

const AccountModal = ({ name, info, setModalOpen }) => {
    return (
        <>
        <Modal.Header>Update Information</Modal.Header>
        <Modal.Content>
          <Modal.Description>
              {name === "NAME" ? <UpdateName setModalOpen={setModalOpen} info={info} /> : name === "EMAIL" ? <UpdateEmail setModalOpen={setModalOpen} info={info} /> : <UpdatePassword setModalOpen={setModalOpen} info={info} />}
          </Modal.Description>
        </Modal.Content>
        </>
    )
}


export default AccountModal;