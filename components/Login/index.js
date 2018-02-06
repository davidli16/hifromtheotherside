import React from 'react';

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

  async _handleSubmit(e) {
    e.preventDefault();

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
      <form onSubmit={this._handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this._handleEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this._handlePassword}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Login;
