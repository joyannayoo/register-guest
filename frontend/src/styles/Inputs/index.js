import styled from "styled-components";

export const GreyRoundInput = styled.input`
  text-align: center;
  box-sizing: border-box;
  border: solid 1px darkgray;
  border-radius: 5px;
  outline-color: gray;
  height: 50px;
  padding-left: 10px;
  text-align: left;
`;

export const FieldInput = styled(GreyRoundInput)`
  height: 35px;
  width: 90%;
  min-width: 250px;
  margin-top: 2px;
`;

export const InputWrapper = styled.div`
  min-width: 300px;
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
