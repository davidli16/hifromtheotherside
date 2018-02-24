import React from 'react';

import css from './Button.css';

export default class extends React.Component {
  render() {
    return <button className={css.button} {...this.props} />;
  }
}
