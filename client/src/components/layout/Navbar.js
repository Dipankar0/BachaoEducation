import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import logo from './bachao.png';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <img
            src={logo}
            style={{ width: '70px', margin: 'auto', display: 'block' }}
            height='25'
            width='50'
            alt=''
          />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/dashboard'>
            <i className='fas fa-user'></i>{' '}
            <span className='hide-sm'>Dashboard</span>
          </Link>
        </li>
        <li>
          <a onClick={logout} href='#!'>
            <i className='fas fa-sign-out-alt'></i>{' '}
            <span className='hide-sm'>Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
  const guestLinks = (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <img
            src={logo}
            style={{ width: '70px', margin: 'auto', display: 'block' }}
            height='25'
            width='50'
            alt=''
          />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <Fragment>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToPorps = state => ({
  auth: state.auth
});

export default connect(mapStateToPorps, { logout })(Navbar);
