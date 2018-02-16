import React from 'react';
import css from 'styled-jsx/css';

import Header from 'components/Header';

const styles = css`
  .root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
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
        <Header />
        <main>{children}</main>
        <footer />
        <style jsx>{styles}</style>
      </div>
    );
  }
}
