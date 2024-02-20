// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Header from './Header';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute'; // Custom PrivateRoute component to protect routes that require authentication

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
