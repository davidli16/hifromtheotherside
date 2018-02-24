import React from 'react';

import request from 'lib/request';

import Layout from 'components/Layout';
import Field from 'components/Field';
import Form from 'components/Form';
import Button from 'components/Button';

import css from './login.css';

export default class extends React.Component {
  constructor() {
    super();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  async _handleSubmit(values) {
    try {
      await request.post('/login', {
        email: values.email,
        password: values.password,
      });
      location.href = '/';
    } catch (error) { }
  }

  render() {
    return (
      <Layout mainClassName={css.centeredForm}>
        <Form
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={this._handleSubmit}
        >
          <Field label="Email" name="email" type="email" />
          <Field label="Password" name="password" type="password" />
          <Button type="submit">Submit</Button>
        </Form>
      </Layout>
    );
  }
}
