import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import * as contactActions from '../../redux/contactActions';

const mapStateToProps = store => ({
  contacts: store.contacts,
});

const mapDispatchToProps = dispatch => ({
  onAddContact: data => dispatch(contactActions.addContactAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
