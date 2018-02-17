import React from 'react';
import Link from 'next/link';

import 'index.css';
import css from './AdminLayout.css';

export default class extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={css.root}>
        <nav className={css.nav}>
          <Link href="/admin/users">
            <a>Users</a>
          </Link>
          <Link href="/admin/events">
            <a>Events</a>
          </Link>
          <Link href="/admin/questions">
            <a>Questions</a>
          </Link>
          <Link href="/logout">
            <a>Logout</a>
          </Link>
        </nav>
        <main className={css.main}>{children}</main>
        <footer />
      </div>
    );
  }
}
