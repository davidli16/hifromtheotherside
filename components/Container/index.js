import React from 'react';

const Container = ({ children }) => (
  <html lang="en">
    <head>
      <title>hello from the other side</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>hi from the other side</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>{children}</body>
  </html>
);

export default Container;
