import React from 'react';

import request from 'lib/request';

import Button from 'components/Button';
import Layout from 'components/Layout';
import Field from 'components/Field';
import Form from 'components/Form';

import css from './signup.css';

export default class extends React.Component {
  constructor() {
    super();

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  async _handleSubmit(values) {
    try {
      await request.post('/signup', {
        firstName: values.firstName,
        lastName: values.lastName,
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
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          onSubmit={this._handleSubmit}
        >
          <Field label="First name" name="firstName" />
          <Field label="Last name" name="lastName" />
          <Field label="Email" name="email" type="email" />
          <Field label="Password" name="password" type="password" />
          <Button type="submit">Submit</Button>
        </Form>
      </Layout>
    );
  }
}
