import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

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
          <style global jsx>{`
            * {
              box-sizing: border-box;
            }

            html,
            body {
              font-family: 'proxima-nova', 'Helvetica Neue', Helvetica, Arial,
                sans-serif;
            }

            a {
              color: white;
              text-decoration: none;
            }

            .root {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }

            .main {
              display: flex;
              flex-grow: 1;
              align-items: center;
              justify-content: center;
            }
          `}</style>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
