import React from 'react';

import Form from 'components/ui/Form';
import Field from 'components/ui/Field';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };

    this._handleEmail = this._handleEmail.bind(this);
    this._handlePassword = this._handlePassword.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  _handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  async _handleSubmit() {
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    if (response.status === 200) {
      this.props.history.push('/profile');
    }
  }
  render() {
    return (
      <Form onSubmit={this._handleSubmit}>
        <Field label="Email" htmlFor="email">
          <input
            name="email"
            value={this.state.email}
            onChange={this._handleEmail}
          />
        </Field>
        <Field label="Password" htmlFor="password">
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this._handlePassword}
          />
        </Field>
        <button type="submit">Submit</button>
      </Form>
    );
  }
}

export default Login;
