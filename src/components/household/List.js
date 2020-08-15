import React, { useState, useEffect } from "react";
import Name from "./Name";

import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions/index'

// Since this component itself is named List i had to import Semantic Ui's List component as UiList
import {
  List as UiList,
  Segment,
  Header
} from "semantic-ui-react";


const List = () => {
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
          </Segment.Group>
        </div>
      </Segment>
  );
};

export default List;
