import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import AddEducation from './components/profile-form/AddEducation';
import Profile from './components/profile/Profile';
import Users from './components/admin/user/Users';
import User from './components/admin/user/User';
import Approve from './components/admin/permission/Approve';
import Decline from './components/admin/permission/Decline';
import PrivateRoute from './components/routing/PrivateRoute';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Admin from './components/admin/navigation/Admin';
import Customers from './components/admin/customer/Customers';
import Customer from './components/admin/customer/Customer';
import { Payment } from './components/payment/Payment';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path='/add-education'
                component={AddEducation}
              />
              <PrivateRoute exact path='/admin' component={Admin} />
              <PrivateRoute exact path='/users' component={Users} />
              <PrivateRoute exact path='/user/:id' component={User} />
              <PrivateRoute exact path='/customers' component={Customers} />
              <PrivateRoute exact path='/customer/:id' component={Customer} />
              <PrivateRoute
                exact
                path='/user/approve/:id'
                component={Approve}
              />
              <PrivateRoute exact path='/user/reject/:id' component={Decline} />
              <PrivateRoute exact path='/profile/:id' component={Profile} />
              <PrivateRoute exact path='/payment' component={Payment} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
