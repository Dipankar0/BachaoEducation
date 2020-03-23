//User page is only accessed by everyone and keeps the list of users who are using this application

import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../layout/Spinner';
import { getProfiles } from '../../../actions/profile';
import UserItem from './UserItem';

const Users = ({
  getProfiles,
  auth: { user },
  profile: { profiles, loading }
}) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className='large text-primary'>Student</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Students who want to join
            EducationBachao
          </p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map(profile =>
                profile.permission === 'approved' &&
                profile.status === 'Student' ? (
                  <UserItem key={profile._id} profile={profile} />
                ) : (
                  ''
                )
              )
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
          <h1 className='large text-primary'>Teacher</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop' /> Teachers who want to join
            EducationBachao
          </p>
          <div className='profiles'>
            {profiles.length > 0 ? (
              profiles.map(profile =>
                profile.permission === 'approved' &&
                profile.status === 'Teacher' ? (
                  <UserItem key={profile._id} profile={profile} />
                ) : (
                  ''
                )
              )
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
          {user && user.email === 'raihanul.haque@northsouth.edu' ? (
            <Fragment>
              <Link to={'/admin'} className='btn btn-primary'>
                Admin Page
              </Link>
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

Users.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Users);
