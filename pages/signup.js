import React from 'react';

import request from 'lib/request';

import Layout from 'components/Layout';
import Form from 'components/Form';
import Field from 'components/Field';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  async _handleSubmit() {
    try {
      await request.post('/signup', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      });
      location.href = '/';
    } catch (error) {}
  }

  render() {
    return (
      <Layout>
        <Form onSubmit={this._handleSubmit}>
          <Field label="First name" htmlFor="firstName">
            <input
              name="firstName"
              value={this.state.firstName}
              onChange={this._handleChange}
            />
          </Field>
          <Field label="Last name" htmlFor="lastName">
            <input
              name="lastName"
              value={this.state.lastName}
              onChange={this._handleChange}
            />
          </Field>
          <Field label="Email" htmlFor="email">
            <input
              name="email"
              value={this.state.email}
              onChange={this._handleChange}
            />
          </Field>
          <Field label="Password" htmlFor="password">
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this._handleChange}
            />
          </Field>
          <button>Submit</button>
        </Form>
      </Layout>
    );
  }
}
