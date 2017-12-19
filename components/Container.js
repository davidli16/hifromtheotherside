import React from 'react';

const Container = ({ children }) => (
  <html lang="en">
    <head>
      <title>hello from the other side</title>
    </head>
    <body>{children}</body>
  </html>
);

export default Container;
