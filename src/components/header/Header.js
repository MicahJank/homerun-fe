import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../sidebar/Sidebar.js";
import { useLocation } from "react-router-dom";
import actions from "../../actions/index.js";

import {
  Header as UiHeader,
  Icon,
  Button,
  Modal,
  Input,
  Message,
  Loader,
  Dimmer,
} from "semantic-ui-react";

import logo from "../../Logos/tidyhive-standalone.png";
import axiosWithAuth from "../../utils/AxiosWithAuth.js";

const Header = (props) => {
  const [pinInput, setPinInput] = useState("");
  const [pinModal, setPinModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  // location is an object that contains the current url path on the 'pathname' property
  const location = useLocation();
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser.childActive === true) {
      setSidebarOpened(false);
    }
  }, [currentUser]);

  // handles what happens when a user clicks on the settings icon or the lock icon when it is a child
  const handleClick = () => {
    if (currentUser.childActive === true) {
      setPinModal(true);
    } else {
      setSidebarOpened(!sidebarOpened);
    }
  };

  const handleChange = (e) => {
    e.persist();
    setPinInput(e.target.value);
  };

  const handleDismiss = () => {
    setError('')
  }

  const modalButtonClick = () => {
    // dispatch action for checking pin and changing the child boolean in state to false
    setLoading(true)
    axiosWithAuth().post('/household/unlock', { pin: pinInput, id: currentUser.userInfo.member_id })
      .then(res => {
        if(res.data.success) {
          dispatch(actions.user.setChildActive(false));
          setLoading(false);
          setPinInput("");
          setPinModal(false);
        }
      })
      .catch(err => {
        setLoading(false)
        setError(err.response.data.message)
      })
  };

  return (
    <>
      <div className="header-container">
        <img
          src={logo}
          alt="TidyHive Logo"
          style={{ width: "60px", height: "auto" }}
        />
        <UiHeader as="h3">
          {location.pathname === "/dashboard" && "Dashboard"}
          {location.pathname === "/household" && "Household"}
          {location.pathname === "/account" && "Account"}
        </UiHeader>
        <Button onClick={handleClick} className="header-btns">
          <Icon
            className="icons-size"
            size="big"
            name={currentUser.childActive === true ? "lock" : `bars`}
          />
        </Button>
      </div>
      <Modal open={pinModal}>
        <Modal.Header>Admin Access</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            You must enter the main user password to gain access to user settings.
          </Modal.Description>
          <Message color={'orange'}>
            Current User: {currentUser.userInfo.username}
          </Message>
          {error ? <Message onDismiss={handleDismiss} negative content={error} /> : ''}
          {loading ? (
          <>
            <Dimmer active>
            <Loader>Loading</Loader>
            </Dimmer>
          </>
          ) : (
          <>
            <Input
              type="password"
              placeholder="Enter password"
              name="pin"
              value={pinInput}
              onChange={handleChange}
            />
            <Button onClick={modalButtonClick} primary content="Submit" />
          </>
          )}
        </Modal.Content>
      </Modal>
      <Sidebar setOpened={setSidebarOpened} opened={sidebarOpened} />
    </>
  );
};

export default Header;
