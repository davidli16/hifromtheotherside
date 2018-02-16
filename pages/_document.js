import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import css from 'styled-jsx/css';

const styles = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: 'proxima-nova', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <title>hello from the other side</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>hi from the other side</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style global jsx>
            {styles}
          </style>
        </body>
      </html>
    );
  }
}
