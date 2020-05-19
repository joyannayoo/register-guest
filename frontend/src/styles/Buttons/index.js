import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  width: 100px;
  background: blue;
  padding: 10px;
  border-radius: 7px;
  border: none;
  margin: 15px 0px;
  outline: none;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.7s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 0.75;
    cursor: pointer;
  }
`;
