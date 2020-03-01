import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { CSSTransition } from 'react-transition-group';
import Notification from '../Notification/Notification';
import Alert from '../Notification/Notification.module.css';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        number: PropTypes.number,
      }),
    ).isRequired,
    onAddContact: PropTypes.func.isRequired,
    // text: PropTypes.string.isRequired,
    // showingAlert: PropTypes.shape.isRequired,
  };

  state = {
    name: '',
    number: '',
    text: '',
    showingAlert: false,
  };

  componentDidMount() {
    const contactsFromLS = localStorage.getItem('contacts');
    if (contactsFromLS) {
      this.setState({ contacts: JSON.parse(contactsFromLS) });
    }
  }

  handleChange = e => {
    const { name } = e.target;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;
    if (name === '' || number === '') return;

    const findName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (findName) {
      this.setState({ text: 'Contact already exists!', showingAlert: true });
    } else {
      this.props.onAddContact({ ...this.state, id: shortid.generate() });
      this.setState({ name: '', number: '' });
    }
  };

  render() {
    const { name, number, text, showingAlert } = this.state;

    return (
      <>
        <form className={styles.contactForm} onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="true">
              <span className={styles.label}>Name</span>
              <input
                className={styles.inputName}
                name="name"
                type="text"
                onChange={this.handleChange}
                value={name}
              />
            </label>
          </p>
          <p>
            <label htmlFor="true">
              <span className={styles.label}>Number</span>
              <input
                className={styles.inputNumber}
                name="number"
                type="tel"
                onChange={this.handleChange}
                value={number}
              />
            </label>
          </p>
          <button type="submit" className={styles.formBtn}>
            Add contact
          </button>
        </form>
        <CSSTransition
          in={showingAlert}
          timeout={250}
          classNames={Alert}
          onEntered={() =>
            setTimeout(() => {
              this.setState({
                showingAlert: false,
              });
            }, 5000)
          }
          unmountOnExit
        >
          <Notification text={text} />
        </CSSTransition>
      </>
    );
  }
}

export default ContactForm;
