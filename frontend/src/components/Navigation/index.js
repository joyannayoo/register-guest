import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutFunction } from "../../store/actions/logoutAction";

const NavigationContainer = styled.div`
  height: 5%;
  width: 100%;
  min-height: 30px;
  min-width: 450px;
  margin-right: 25px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const PlainText = styled.p`
  width: 150px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const OptionsText = styled(PlainText)`
  width: 150px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  :hover {
    color: gray;
    cursor: pointer;
    font-weight: bold;
  }
`;

const UsernameText = styled(PlainText)`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;

function NavigationBar(props) {
  const history = useHistory();

  const listGuestsHandler = (e) => {
    e.preventDefault();
    history.push("/guests/");
  };

  const addGuestHandler = (e) => {
    e.preventDefault();
    history.push("/guests/add/");
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    props.dispatch(logoutFunction());
    history.push("/");
  };

  return (
    <NavigationContainer>
      {props.username ? (
        <UsernameText>{props.username.username}</UsernameText>
      ) : null}
      <OptionsText onClick={listGuestsHandler}>List Guests</OptionsText>
      <OptionsText onClick={addGuestHandler}>Add Guest</OptionsText>
      <OptionsText onClick={logoutHandler}>Log Out</OptionsText>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.user,
  };
};

export default connect(mapStateToProps)(NavigationBar);
