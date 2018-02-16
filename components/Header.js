import React from 'react';
import Link from 'next/link';

export default class extends React.Component {
  render() {
    return (
      <header>
        <style global jsx>{`
          header {
            display: flex;
            align-items: center;
            background: #333;
            padding: 16px;
          }
        `}</style>
        <img src="images/logo.png" />
        <Link href="/signup">Signup</Link>
        <Link href="/login">Login</Link>
      </header>
    );
  }
}
