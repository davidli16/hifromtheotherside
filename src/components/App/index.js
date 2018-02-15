import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Dashboard from 'components/admin/Dashboard';
import Login from 'components/Login';
import Signup from 'components/Signup';

import styles from './styles.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <header className={styles.header}>
          <img src="images/logo.png" />
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </header>
        <main className={styles.main}>
          <Route exact path="/admin" component={Dashboard} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
