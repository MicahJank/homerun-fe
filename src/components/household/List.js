import React, { useState, useEffect } from "react";
import Name from "./Name";

import { useSelector, useDispatch } from 'react-redux';
import actions from '../../actions/index'

// Since this component itself is named List i had to import Semantic Ui's List component as UiList
import {
  Button,
  Modal,
  List as UiList,
} from "semantic-ui-react";


const List = () => {

  const household = useSelector(state => state.household)
  const dispatch = useDispatch();
  console.log(household);

  useEffect(() => {
    dispatch(actions.houseHold.fetchHousehold())
  }, []);

  return (
    <div className="list-container">
      <UiList className="user-list" selection verticalAlign="middle">
        {household.members.map(member => {
          return <Name key={member.username} name={member.username} />;
        })}
      </UiList>
      <UiList className="user-list" selection verticalAlign="middle">
      {household.children.map(member => {
        return <Name key={member.username} name={member.username} />;
      })}
      </UiList>
    </div>
  );
};

export default List;
