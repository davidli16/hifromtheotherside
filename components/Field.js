import React from 'react';
import cls from 'classnames';
import { Field } from 'formik';

import css from './Field.css';

export default class extends React.Component {
  static defaultProps = {
    type: 'text',
  };

  render() {
    const { label, className, name, ...props } = this.props;
    return (
      <div className={cls(css.field, className)}>
        <label htmlFor={name} className={css.label}>
          {label}
        </label>
        <Field name={name} {...props} />
      </div>
    );
  }
}
