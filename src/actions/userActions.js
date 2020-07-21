import axios from 'axios';
import axiosWithAuth from '../utils/AxiosWithAuth.js';

// Action Creators
const setUser = (user) => dispatch => {
  console.log(user);
	dispatch({ type: "SET_USER", payload: user })
}

// updates user info in the backend and gets a response of the updated info
const updateUserInfo = (updateInfo) => dispatch => {
  dispatch({ type: "SET_LOADING" })
  axiosWithAuth().put('/members/update-info', updateInfo)
    .then(res => {
      dispatch({ type: "UPDATE_USER_INFO", payload: res.data });
      dispatch({ type: "SET_LOADING_FALSE" })
    })
    .catch(err => {
      console.log(err)
    })
}

const changeUser = (user) => dispatch => {
  const { email, password } = user;
  if(!user.child) {
    dispatch({ type: "LOAD_USER"})
    axios
      .post(`${process.env.REACT_APP_BE_URL}/auth/login`, {email, password })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        setUser(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  } else  {
    dispatch({ type: "SET_USER", payload: user })
  }
}

// sets the state to have the child details stored in redux
const setChild = child => dispatch => {
  dispatch({ type: "SET_CHILD", payload: child });
  dispatch({ type: "CHILD_ACTIVE", payload: true });
}

// sets whether a child account is active or not by the boolean value that is passed in
const setChildActive = isActive => dispatch => {
  dispatch({ type: "CHILD_ACTIVE", payload: isActive })
}

export default {
  setUser,
  changeUser,
  setChild,
  setChildActive,
  updateUserInfo
};
