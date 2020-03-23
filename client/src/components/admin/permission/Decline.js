import React, { Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { putRejection } from '../../../actions/profile';

const Decline = ({ putRejection, match, auth: { user } }) => {
  useEffect(() => {
    putRejection(match.params.id);
  }, [putRejection, match.params.id]);

  return (
    <Fragment>
      {user && user.email === 'raihanul.haque@northsouth.edu' ? (
        <Fragment>
          <h1 className='large text-primary'>This user is declined</h1>

          <Link className='btn btn-success' to='/customers'>
            Users List
          </Link>
        </Fragment>
      ) : (
        <Fragment></Fragment>
      )}
    </Fragment>
  );
};

Decline.propTypes = {
  putRejection: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { putRejection })(withRouter(Decline));
