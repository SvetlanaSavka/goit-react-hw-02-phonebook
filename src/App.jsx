import { nanoid } from 'nanoid';
import React from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContacts = data => {
    const isAdded = this.validationData(data);
    if (isAdded) {
      alert(`${data.name} уже добавлен`);
      return;
    }
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  formSubmitHandler = data => {
    // поднятие состояния
    console.log(data);
  };

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value, //обновляем фильтр
    });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  validationData = data =>
    this.state.contacts.find(contact => contact.name === data.name);

  deleteContact = id => {
    // array.filter(el => el.name !== name)
    const filteredArray = this.state.contacts.filter(el => el.id !== id);
    this.setState({ contacts: filteredArray });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onRemoveContact={this.deleteContact}
        />

        {/* <ContactList ... />  */}
      </>
    );
  }
}
// value={filter}= значение из State
//visibleContacts  куда передать?
