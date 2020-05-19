import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { login } from "../../store/actions/Authentication/loginActions";
import isEmail from "../../helpers/isEmail";
import { GreyRoundInput } from "../../styles/Inputs";
import { Button } from "../../styles/Buttons";
import { AddBox, Container, Wrapper } from "../../styles/BaseContainer";

const Text = styled.div`
  height: auto;
  font-size: 18px;
  color: #717171;
  margin-bottom: 7px;
`;

const LoginInput = styled(GreyRoundInput)`
  height: 55px;
  width: 100%;
  margin-bottom: 45px;
`;

const LoginBox = styled(AddBox)`
  height: auto;
  border: solid 1px #ebebeb;
  padding: 60px;
  width: 50%;
  max-width: 500px;
`;

const Form = styled.form`
  padding: 30px;
`;

const Controls = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export function Login() {
  const is_authenticated = useSelector((state) => state.auth.is_authenticated);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const LoginSubmitHandler = async (e) => {
    e.preventDefault();
    if (isEmail(email) && password) {
      const resp = await dispatch(login({ email, password }));
      if (resp.statusText !== "OK") {
        try {
          setError(resp.response.data.detail);
        } catch {}
      } else {
        setError("");
      }
    }
  };

  return is_authenticated ? (
    <Redirect to={{ pathname: "/guests/add/" }} />
  ) : (
    <Wrapper>
      <Container>
        <LoginBox>
          <Form onSubmit={LoginSubmitHandler}>
            <Text>Email address</Text>
            <LoginInput
              name="email"
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Text>Password</Text>
            <LoginInput
              name={"password"}
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Controls>
              <Button type={"submit"}>Log In</Button>
            </Controls>
          </Form>
        </LoginBox>
      </Container>
    </Wrapper>
  );
}
