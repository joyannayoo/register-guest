import styled from "styled-components";

export const TableBase = styled.table`
  height: auto;
  width: auto;
  min-width: 270px;
  border: 1px solid #ebebeb;
  background: #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`;

export const TableHeaderWrapper = styled.thead``;

export const TableHeader = styled.th`
  height: 40px;
  width: auto;
  text-align: left;
  padding: 10px;
`;

export const TableHeaderRow = styled.tr``;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableRow = styled.tr`
  width: 100%;
  height: 25px;
  text-transform: capitalize;
  :nth-child(odd) {
    background: #ebebeb;
  }
`;

export const TableData = styled.td`
  height: 25px;
  width: 21%;
  min-width: 50px;
  padding: 10px;
`;

export const ShortTableData = styled.td`
  height: 25px;
  width: 10%;
  min-width: 50px;
  padding: 10px;
`;

export const DeleteTableData = styled.td`
  height: 25px;
  width: 7%;
  min-width: 40px;
  padding-top: 6px;
  text-align: center;
`;
