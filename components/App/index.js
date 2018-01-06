import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Login from '../Login';
import Signup from '../Signup';

import styles from './styles.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className={styles.header}>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </header>
        <main>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
