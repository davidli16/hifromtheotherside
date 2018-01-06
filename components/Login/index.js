import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <input name="email" />
        <input type="password" name="password" />
      </form>
    );
  }
}

export default Login;
