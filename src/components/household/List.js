import React, { useState, useEffect } from "react";
import Name from "./Name";

import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions/index'

// Since this component itself is named List i had to import Semantic Ui's List component as UiList
import {
  List as UiList,
  Segment,
  Header,
  Button,
  Modal
} from "semantic-ui-react";

import InviteMember from "./InviteMember.js";
import AddChild from "./AddChild.js";

const List = () => {
  const [childModal, setChildModal] = useState(false);
  const [memberModal, setMemberModal] = useState(false);

  const household = useSelector(state => state.household)
  const dispatch = useDispatch();
  console.log(household);

  useEffect(() => {
    dispatch(actions.houseHold.fetchHousehold())
  }, []);

  return (
      <Segment placeholder className="list-container">
        <div className="user-list">
          <Header>Users</Header>
          <Segment.Group>
            <UiList selection verticalAlign="middle">
              {household.members.map(member => {
                return <Name key={member.username} name={member.username} />;
              })}
            </UiList>
            <Modal className="household-modal"
                open={memberModal}
                onClose={() => setMemberModal(false)}
                trigger={
                <Button className="household-btn" primary onClick={() => setMemberModal(true)}>Invite Member</Button>
              }
              
              content={<InviteMember setModal={setMemberModal} />}>
            </Modal>
          </Segment.Group>
        </div>
        <div className="user-list">
          <Header>Children</Header>
          <Segment.Group >
            <UiList selection verticalAlign="middle">
              {household.children.map(member => {
              return <Name key={member.username} name={member.username} />;
              })}
            </UiList>
              <Modal className="household-modal"
                open={childModal}
                onClose={() => setChildModal(false)}
                trigger={<Button className={'addChild-btn household-btn'} onClick={() => setChildModal(true)}>Add Child</Button>}
                content={<AddChild setModal={setChildModal} />}
            ></Modal>
          </Segment.Group>
        </div>
      </Segment>
  );
};

export default List;
