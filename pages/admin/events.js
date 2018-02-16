import React from 'react';

import request from 'lib/request';

import AdminLayout from 'components/AdminLayout';

export default class extends React.Component {
  static async getInitialProps() {
    return {};
  }

  render() {
    return <AdminLayout />;
  }
}
