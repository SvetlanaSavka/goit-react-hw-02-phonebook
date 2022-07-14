import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 400px;
  border-radius: 2px;
  margin-bottom: 6px;
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 16px;
  font-size: 20px;
  font-family: 'Helvetica';
  //cursor: pointer;
  color: black;
`;

export const Button = styled.button`
  display: inline-flex;
  width: 200px;
  background-color: lightgrey;
  color: black;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  border-radius: 4px;
  cursor: pointer;
  font: inherit;
  :hover {
    background-color: lightblue;
  }
`;

export const Input = styled.input`
  margin-left: 20px;
  display: inline-block;
  border-width: 2px;
  border-radius: 4px;
  height: 26px;
  width: 250px;
`;
