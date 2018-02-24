import React from 'react';

import css from './Section.css';

export default class extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={css.section}>
        <div className={css.title}>{title}</div>
        {children}
      </div>
    );
  }
}
