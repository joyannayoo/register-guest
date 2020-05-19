import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  height: 95%;
  width: 100%;
  min-height: 500px;
  min-width: 375px;
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AddBox = styled.div`
  height: 75%;
  width: 35%;
  min-height: 475px;
  min-width: 450px;
  padding: 40px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const ListBox = styled.div`
  height: 90%;
  width: 80%;
  min-height: 500px;
  min-width: 300px;
  padding: 30px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const HeaderTitle = styled.div`
  height: auto;
  padding-bottom: 15px;
  font-size: 30px;
  text-transform: uppercase;
`;

export const Form = styled.form`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
