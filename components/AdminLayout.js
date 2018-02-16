import React from 'react';
import Link from 'next/link';
import css from 'styled-jsx/css';

const styles = css`
  .root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  nav {
    background: #333;
  }

  main {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
`;

export default class extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="root">
        <nav>
          <Link href="/admin/users">
            <a>Users</a>
          </Link>
          <Link href="/admin/events">
            <a>Events</a>
          </Link>
          <Link href="/admin/questions">
            <a>Questions</a>
          </Link>
        </nav>
        <main>{children}</main>
        <footer />
        <style jsx>{styles}</style>
      </div>
    );
  }
}
