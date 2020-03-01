import React from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import styles from './App.module.css';
import '../styles.css';

// const filterContacts = (contacts, filter) => {
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase()),
//   );
// };

const App = () => {
  // state = {
  //   contacts: [],
  //   filter: '',
  //   text: '',
  //   showingAlert: false,
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;
  //   if (prevState.contacts !== contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

  // deleteContact = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(el => el.id !== id),
  //   }));
  // };

  // changeFilter = e => {
  //   this.setState({ filter: e.target.value });
  // };

  // addContact = name => {
  //   if (this.state.contacts.find(item => item.name === name.name)) {
  //     this.setState({ text: 'Contact already exists!', showingAlert: true });
  //     return;
  //   }

  //   const contactToAdd = {
  //     ...name,
  //     id: shortid.generate(),
  //   };

  //   this.setState(prevState => ({
  //     contacts: [...prevState.contacts, contactToAdd],
  //   }));
  // };

  // render() {
  // const { contacts, filter } = this.state;
  // const filterContacts = () => {
  //   return contacts.some(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()),
  //   );
  // };

  // const filteredContacts = filterContacts(contacts, filter);

  return (
    <div className={styles.containerApp}>
      <CSSTransition in timeout={500} classNames="title" appear>
        <h1 className={styles.titleApp}>Phonebook</h1>
      </CSSTransition>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
// }

export default App;
