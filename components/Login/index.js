import React from 'react';

class Login extends React.Component {
  state = {};

  _handleEmail = e => {
    this.setState({ email: e.target.value });
  };

  _handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <form>
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
