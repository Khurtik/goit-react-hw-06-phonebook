import React from 'react';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';

import slideTransition from '../transition/slide.module.css';
import styles from './Filter.module.css';

const Filter = ({ contacts = [], value, onChangeFilter }) => {
  Filter.propTypes = {
    contacts: PropTypes.shape({ length: PropTypes.number }).isRequired,
    value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
  };
  return (
    <>
      <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        unmountOnExit
        classNames={slideTransition}
      >
        <>
          <span className={styles.filterTitle}>Find contacts by name</span>
          <input
            className={styles.filterInput}
            type="text"
            value={value}
            onChange={e => onChangeFilter(e.target.value)}
          />
        </>
      </CSSTransition>
    </>
  );
};

export default Filter;
