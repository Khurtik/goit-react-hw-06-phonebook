import { connect } from 'react-redux';
import * as contactActions from '../../redux/contactActions';
import Filter from './Filter';

const mapStateToProps = store => ({
  contacts: store.contacts,
  filter: store.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: value => dispatch(contactActions.filterContactAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
