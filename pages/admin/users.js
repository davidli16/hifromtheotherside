import React from 'react';

import request from 'lib/request';

import AdminLayout from 'components/AdminLayout';

function User({ user }) {
  return (
    <div>
      <div>
        {user.firstName} {user.lastName}
      </div>
    </div>
  );
}

export default class extends React.Component {
  static async getInitialProps() {
    const users = await request.get('/admin/users.json');
    return {
      users,
    };
  }

  render() {
    const { users } = this.props;
    return (
      <AdminLayout>
        {users.map(user => <User key={user.id} user={user} />)}
      </AdminLayout>
    );
  }
}
