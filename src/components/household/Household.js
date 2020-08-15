import React, { useState } from "react";
import List from "./List";
import { Modal, Button } from 'semantic-ui-react';
import AddChild from "./AddChild.js";
import InviteMember from "./InviteMember.js";

const Household = () => {
  const [childModal, setChildModal] = useState(false);
  const [memberModal, setMemberModal] = useState(false);
  
  return (
    <div className="household container">
      <List />
      <Modal
        open={memberModal}
        onClose={() => setMemberModal(false)}
        trigger={
          <Button primary onClick={() => setMemberModal(true)}>Invite Member</Button>
        }
        
        content={<InviteMember setModal={setMemberModal} />}
      ></Modal>

      <Modal
        open={childModal}
        onClose={() => setChildModal(false)}
        trigger={<Button className={'addChild-btn'} onClick={() => setChildModal(true)}>Add Child</Button>}
        content={<AddChild setModal={setChildModal} />}
      ></Modal>
    </div>
  );
};

export default Household;
