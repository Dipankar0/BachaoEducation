import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../layout/Spinner';
import ProfileTop from '../../profile/ProfileTop';
import ProfileAbout from '../../profile/ProfileAbout';
import { getProfileById } from '../../../actions/profile';

const Customer = ({
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
      {user && user.email === 'raihanul.haque@northsouth.edu' && (
        <Fragment>
          {' '}
          {profile === null || loading ? (
            <Spinner />
          ) : (
            <Fragment>
              <Link to='/profiles' className='btn btn-light'>
                Back To Profiles
              </Link>
              <div className='profile-grid my-1'>
                <ProfileTop profile={profile} />
                <ProfileAbout profile={profile} />
              </div>
              <Fragment>
                {profile && profile.file ? (
                  <Fragment>
                    {' '}
                    <img
                      src={profile && profile.file}
                      style={{
                        width: '500px',
                        margin: 'auto',
                        display: 'block'
                      }}
                      alt='Indentificaton Card'
                    />
                  </Fragment>
                ) : (
                  <Fragment>
                    <h3>This customer did not attach any image</h3>
                  </Fragment>
                )}
              </Fragment>{' '}
              <Link
                to={`/user/approve/${profile.user._id}`}
                className='btn btn-primary'
              >
                Approve
              </Link>
              <Link
                to={`/user/reject/${profile.user._id}`}
                className='btn btn-primary'
              >
                Reject
              </Link>
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

Customer.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Customer);
