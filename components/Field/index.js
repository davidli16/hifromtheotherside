import React from 'react';

import styles from './styles.scss';

class Field extends React.Component {
  render() {
    const { htmlFor, label, children } = this.props;
    return (
      <div className={styles.root}>
        <label htmlFor={htmlFor}>{label}</label>
        {children}
      </div>
    );
  }
}

export default Field;
