//Customers page is only viewed by admin and it shows the list of people who wants to join

import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../layout/Spinner';
import { getProfiles } from '../../../actions/profile';
import CustomerItem from './CustomerItem';

const Customers = ({
  getProfiles,
  profile: { profiles, loading },
  auth: { user }
}) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {user && user.email === 'raihanul.haque@northsouth.edu' ? (
        <Fragment>
          {loading ? (
            <Spinner />
          ) : (
            <Fragment>
              <h1 className='large text-primary'>Student</h1>
              <p className='lead'>
                <i className='fab fa-connectdevelop' /> Students who want to
                join EducationBachao
              </p>
              <Fragment>
                {profiles.length > 0 ? (
                  <Fragment>
                    {profiles.map(profile =>
                      profile.status === 'Student' && !profile.permission ? (
                        <CustomerItem key={profile._id} profile={profile} />
                      ) : (
                        ''
                      )
                    )}
                  </Fragment>
                ) : (
                  <Fragment>
                    <h4>No profiles found to join...</h4>
                  </Fragment>
                )}
              </Fragment>
              <h1 className='large text-primary'>Teacher</h1>
              <p className='lead'>
                <i className='fab fa-connectdevelop' /> Teachers who want to
                join EducationBachao
              </p>
              <Fragment>
                {profiles.length > 0 ? (
                  <Fragment>
                    {profiles.map(profile =>
                      profile.status === 'Teacher' && !profile.permission ? (
                        <CustomerItem key={profile._id} profile={profile} />
                      ) : (
                        ''
                      )
                    )}
                  </Fragment>
                ) : (
                  <Fragment>
                    <h4>No profiles found to join...</h4>
                  </Fragment>
                )}
              </Fragment>
            </Fragment>
          )}
          <Link to={'/admin'} className='btn btn-primary'>
            Admin Page
          </Link>
        </Fragment>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

Customers.propTypes = {
  auth: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Customers);
