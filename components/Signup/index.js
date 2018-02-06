import React from 'react';
import { withRouter } from 'react-router-dom';

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

  async _handleSubmit(e) {
    e.preventDefault();

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
      <form onSubmit={this._handleSubmit}>
        <div>
          <label htmlFor="firstName">First name</label>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this._handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name</label>
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this._handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this._handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="passwprd"
            name="password"
            value={this.state.password}
            onChange={this._handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(Signup);
