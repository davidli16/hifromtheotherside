import React from 'react';
import { withRouter } from 'react-router-dom';

import Form from '../Form';
import Field from '../Field';

class Signup extends React.Component {
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
    const response = await fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    if (response.status === 200) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
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
            type="passwprd"
            name="password"
            value={this.state.password}
            onChange={this._handleChange}
          />
        </Field>
        <button>Submit</button>
      </Form>
    );
  }
}

export default withRouter(Signup);
