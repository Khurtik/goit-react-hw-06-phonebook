import { connect } from 'react-redux';
import * as contactAction from '../../redux/contactActions';
import ContactList from './ContactList';

const mapStateToProps = store => ({
  contacts: store.contacts,
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactAction.deleteContactAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
