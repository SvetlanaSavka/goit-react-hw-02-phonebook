import styled from 'styled-components';
import { Form, Field /* ErrorMessage */ } from 'formik';

export const Formcontact = styled(Form)`
  /*  width: 100%;
  height: 45px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  outline: none;
  padding-left: 10px;
  color: teal; */

  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 100%;
  border-radius: 2px;
  margin-bottom: 6px;
`;

export const Formcontactlabel = styled.label`
  display: inline-block;
  margin-left: 20px;
  font-size: 20px;
  font-family: sans-serif;
  cursor: pointer;
  color: black;
`;

export const ButtononClick = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-top: 20px;
  padding: 4px 18px;
  width: 120px;
  border-radius: 4px;
  background-color: lightblue;
  :hover {
    background-color: lightgrey;
  }
`;

export const ContactFormField = styled(Field)`
  margin-left: 20px;
  display: inline-block;
  border-width: 2px;
  border-radius: 4px;
  height: 26px;
  //width: 50px;
`;
