import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {
  Formcontact,
  ButtononClick,
  ContactFormField,
  Formcontactlabel,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .required()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    }),

  number: yup
    .string()
    .required()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
      }
    ),
});

const initialValues = {
  number: '',
  name: '',
};

export const ContactForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Formcontact autoComplete="off">
        <Formcontactlabel for="user-name">Name</Formcontactlabel>
        <ContactFormField type="text" name="name" id="user-name" />
        <ErrorMessage name="name" />

        <Formcontactlabel htmlFor="number">Number</Formcontactlabel>
        <ContactFormField type="tel" name="number" />
        <ErrorMessage name="number" />

        <ButtononClick type="submit">Add contact</ButtononClick>
      </Formcontact>
    </Formik>
  );
};

/* state = {
    number: '',
    name: '',
  }; */

/* handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  }; */

/*  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
    this.reset();
  }; */

/* reset = () => {
    this.setState({ name: '', number: '' });
  }; */

ContactForm.propTypes = {
  contacts: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContactForm;
/*  <>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Input
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor="number">
            Number
            <Input
              //onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </> */
