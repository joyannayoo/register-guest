import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Container,
  Form,
  HeaderTitle,
  Wrapper,
  AddBox,
} from "../../styles/BaseContainer";
import NavigationBar from "../Navigation";
import { FieldInput, InputWrapper } from "../../styles/Inputs";
import { Button } from "../../styles/Buttons";
import { addGuestFunction } from "../../store/actions/addGuestAction";

function AddGuest(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [tableNumber, setTableNumber] = useState("");

  const dispatch = props.dispatch;

  const addGuestHandler = async () => {
    const data = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      table_number: tableNumber,
    };
    await dispatch(addGuestFunction(data));
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setTableNumber("");
    props.history.push("/guests/add/");
  };

  return (
    <Wrapper>
      <NavigationBar />
      <Container>
        <AddBox>
          <HeaderTitle>Guest Information</HeaderTitle>
          <Form>
            <InputWrapper>
              First Name
              <FieldInput
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
            </InputWrapper>
            <InputWrapper>
              Last Name
              <FieldInput
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
            </InputWrapper>
            <InputWrapper>
              Phone Number
              <FieldInput
                name="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </InputWrapper>
            <InputWrapper>
              Table Number
              <FieldInput
                name="tableNumber"
                onChange={(e) => setTableNumber(e.target.value)}
                value={tableNumber}
              />
            </InputWrapper>
            <Button onClick={addGuestHandler}>Submit</Button>* Ihre Daten werden
            für das BAG 14 Tage aufbewahrt und anschliessend gelöscht
          </Form>
        </AddBox>
      </Container>
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    guests: state.guests,
  };
};

export default connect(mapStateToProps)(AddGuest);
