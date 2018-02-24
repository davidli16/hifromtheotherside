import React from 'react';
import Router from 'next/router';

import request from 'lib/request';

import AdminLayout from 'components/AdminLayout';
import Form from 'components/Form';
import Field from 'components/Field';
import Button from 'components/Button';

export default class extends React.Component {
  static async getInitialProps() {
    const events = await request.get('/admin/events/getAll');
    return {
      events,
    };
  }

  constructor() {
    super();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  async _handleSubmit(values) {
    await request.post('/admin/events/create', {
      name: values.name,
      description: values.description,
      code: values.code,
    });
    Router.reload();
  }

  render() {
    const { events } = this.props;
    return (
      <AdminLayout>
        <Form
          initialValues={{ name: '', description: '', code: '' }}
          onSubmit={this._handleSubmit}
        >
          <Field label="Name" name="name" />
          <Field label="Description" name="description" component="textarea" />
          <Field label="Code" name="code" />
          <Button type="submit">Submit</Button>
        </Form>
        {events.map(event => (
          <div key={event.id}>
            {event.name}: {event.description} | {event.code}
          </div>
        ))}
      </AdminLayout>
    );
  }
}
