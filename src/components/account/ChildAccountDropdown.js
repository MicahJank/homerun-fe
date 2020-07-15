import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import actions from "../../actions";

const ChildAccountDropdown = () => {
  const members = useSelector((state) => state.household.members);
  const dispatch = useDispatch();
  const [dropDownValue, setDropDownValue] = useState();
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const children = members
      .filter((member) => member.child)
      .map((child) => {
        return { key: child.id, text: child.username, value: child.username };
      });
    children.unshift({
      key: 99,
      text: "Select One",
      value: "Switch to Child Account.",
    });

    setOptions(children);
  }, []);

  const handleChange = (event, { value }) => {
    event.persist();
    if (value !== "Switch to Child Account.") {
      setDropDownValue(value);
      const [user] = members.filter((user) => value === user.username);
      dispatch(actions.user.setChild(user));
      setDropDownValue('')
    }
  };

  return (
    <Dropdown
      style={{padding: '20px', margin: '0px 0 50px 0'}}
      selection
      onChange={handleChange}
      placeholder={`Switch to Child Account.`}
      value={dropDownValue}
      fluid
      options={options}
    />
  );
};

export default ChildAccountDropdown;
