import React from 'react';
import { Formik, Form, Field } from 'formik';

import request from 'lib/request';

import Layout from 'components/Layout';

import css from './signup.css';

export default class extends React.Component {
  constructor() {
    super();

    this._renderForm = this._renderForm.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _renderForm() {
    return (
      <Form>
        <label htmlFor="firstName">First name</label>
        <Field name="firstName" />

        <label htmlFor="lastName">Last name</label>
        <Field name="lastName" />

        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />

        <label htmlFor="email">Password</label>
        <Field name="password" type="password" />

        <button type="submit">Submit</button>
      </Form>
    );
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
    } catch (error) {}
  }

  render() {
    return (
      <Layout mainClassName={css.centeredForm}>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          }}
          render={this._renderForm}
          onSubmit={this._handleSubmit}
        />
      </Layout>
    );
  }
}
