import React from 'react';

import { Modal, Image, Header, Input } from 'semantic-ui-react';

import UpdateName from './UpdateName.js';
import UpdateEmail from './UpdateEmail.js';
import UpdatePassword from './UpdatePassword.js';

const AccountModal = ({ name, info, setModalOpen, setMessage }) => {
    return (
        <>
        <Modal.Header>Update Information</Modal.Header>
        <Modal.Content>
          <Modal.Description>
              {name === "NAME" ? <UpdateName setMessage={setMessage} setModalOpen={setModalOpen} info={info} /> : name === "EMAIL" ? <UpdateEmail setMessage={setMessage} setModalOpen={setModalOpen} info={info} /> : <UpdatePassword setMessage={setMessage} setModalOpen={setModalOpen} info={info} />}
          </Modal.Description>
        </Modal.Content>
        </>
    )
}


export default AccountModal;