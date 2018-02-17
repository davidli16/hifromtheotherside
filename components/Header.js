import React from 'react';
import Link from 'next/link';

import css from './Header.css';

export default class extends React.Component {
  render() {
    return (
      <header className={css.header}>
        <img src="images/logo.png" />
        <Link href="/signup">
          <a>Signup</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </header>
    );
  }
}
