import React, { useEffect } from "react";
import { connect } from "react-redux";
import Time from "react-time";
import styled from "styled-components";
import {
  Container,
  HeaderTitle,
  ListBox,
  Wrapper,
} from "../../styles/BaseContainer";
import NavigationBar from "../Navigation";
import {
  DeleteTableData,
  ShortTableData,
  TableBase,
  TableBody,
  TableData,
  TableHeader,
  TableHeaderRow,
  TableHeaderWrapper,
  TableRow,
} from "../../styles/Tables";
import { listGuestsFunction } from "../../store/actions/listGuestsActions";
import { deleteGuestFunction } from "../../store/actions/deleteGuestAction";
import delete_button from "../../assets/delete_button.png";

const DeleteButton = styled.img`
  height: 20px;
  width: 20px;
  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;

function ListGuests(props) {
  const dispatch = props.dispatch;

  useEffect(() => {
    dispatch(listGuestsFunction());
  }, [dispatch]);

  const deleteGuestHandler = (id) => {
    dispatch(deleteGuestFunction(id));
    props.history.push("/guests/");
  };

  const headers = [
    "Date",
    "Time",
    "First Name",
    "Last Name",
    "Phone Number",
    "Table",
    "Delete",
  ];

  return (
    <Wrapper>
      <NavigationBar />
      <Container>
        <ListBox>
          <HeaderTitle>Guests</HeaderTitle>
          <TableBase>
            <TableHeaderWrapper>
              <TableHeaderRow>
                {headers.map((header) => {
                  return <TableHeader key={header}>{header}</TableHeader>;
                })}
              </TableHeaderRow>
            </TableHeaderWrapper>
            <TableBody>
              {props.guests
                ? props.guests.map((guest) => {
                    return (
                      <TableRow key={guest.id}>
                        <ShortTableData>
                          <Time value={guest.created} format="DD-MM" />
                        </ShortTableData>
                        <ShortTableData>
                          <Time value={guest.created} format="HH:mm" />
                        </ShortTableData>
                        <TableData>{guest.first_name}</TableData>
                        <TableData>{guest.last_name}</TableData>
                        <TableData>{guest.phone_number}</TableData>
                        <ShortTableData>{guest.table_number}</ShortTableData>
                        <DeleteTableData
                          className="delete-button"
                          onClick={() => {
                            if (
                              window.confirm(
                                `${guest.first_name} ${guest.last_name} will be removed from the list.\n\nThis cannot be reversed.`
                              )
                            )
                              deleteGuestHandler(guest.id);
                          }}
                        >
                          <DeleteButton src={delete_button} />
                        </DeleteTableData>
                      </TableRow>
                    );
                  })
                : null}
            </TableBody>
          </TableBase>
        </ListBox>
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

export default connect(mapStateToProps)(ListGuests);
