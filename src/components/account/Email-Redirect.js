import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Loader, Dimmer } from "semantic-ui-react";
import { useDispatch, useSelector } from 'react-redux';

import actions from "../../actions";
import axiosWithAuth from "../../utils/AxiosWithAuth";

const EmailRedirect = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  let { hash } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    axiosWithAuth()
      .put(`${process.env.REACT_APP_BE_URL}/members/confirm-new-email`, { hash })
      .then((res) => {
        console.log(res.data)
        dispatch(actions.user.updateUserEmail(res.data.email))
        props.history.push("/account");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      ) : null}
    </div>
  );
};

export default EmailRedirect;
