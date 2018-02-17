import React from 'react';
import cls from 'classnames';

import Header from 'components/Header';

import 'index.css';
import css from './Layout.css';

export default class extends React.Component {
  render() {
    const { children, className, mainClassName } = this.props;
    return (
      <div className={cls(css.root, className)}>
        <Header />
        <main className={cls(css.main, mainClassName)}>{children}</main>
        <footer />
      </div>
    );
  }
}
