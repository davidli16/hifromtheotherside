import React from 'react';

import request from 'lib/request';

import AdminLayout from 'components/AdminLayout';

function User({ user }) {
  return (
    <tr>
      <td>
        {user.firstName} {user.lastName}
      </td>
      <td>{user.email}</td>
    </tr>
  );
}

export default class extends React.Component {
  static async getInitialProps() {
    const users = await request.get('/admin/users/getAll');
    return {
      users,
    };
  }

  render() {
    const { users } = this.props;
    return (
      <AdminLayout>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{users.map(user => <User key={user.id} user={user} />)}</tbody>
        </table>
      </AdminLayout>
    );
  }
}
