import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';
import ProfileTop from '../../profile/ProfileTop';
import ProfileAbout from '../../profile/ProfileAbout';
import { getProfileById } from '../../../actions/profile';

const User = ({
  getProfileById,
  profile: { profile, loading },
  auth: { user },
  match
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      {user && user.email === 'raihanul.haque@northsouth.edu' ? (
        <Fragment>
          {profile === null || loading ? (
            <Spinner />
          ) : (
            <Fragment>
              <Link to='/users' className='btn btn-light'>
                Back To Users
              </Link>
              <div className='profile-grid my-1'>
                <ProfileTop profile={profile} />
                <ProfileAbout profile={profile} />
              </div>
            </Fragment>
          )}
        </Fragment>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

User.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(User);