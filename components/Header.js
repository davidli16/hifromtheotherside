import React from 'react';
import Link from 'next/link';
import css from 'styled-jsx/css';

const styles = css`
  header {
    display: flex;
    align-items: center;
    background: #333;
    padding: 16px;
  }
`;

export default class extends React.Component {
  render() {
    return (
      <header>
        <img src="images/logo.png" />
        <Link href="/signup">
          <a>Signup</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>
        <style jsx>{styles}</style>
      </header>
    );
  }
}
