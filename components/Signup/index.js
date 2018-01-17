import React from 'react';

class Signup extends React.Component {
  render() {
    return (
      <form>
        <input name="firstName" />
        <input name="lastName" />
        <input name="email" />
        <input name="password" />
        <input name="zipCode" />
        <button>Submit</button>
      </form>
    );
  }
}

export default Signup;
