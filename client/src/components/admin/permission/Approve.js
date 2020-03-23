import React, { Fragment, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { putApproval } from '../../../actions/profile';

const Approve = ({ putApproval, match, auth: { user } }) => {
  useEffect(() => {
    putApproval(match.params.id);
  }, [putApproval, match.params.id]);

  return (
    <Fragment>
      {user && user.email === 'raihanul.haque@northsouth.edu' ? (
        <Fragment>
          <h1 className='large text-primary'>This user is approved</h1>

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

Approve.propTypes = {
  putApproval: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { putApproval })(withRouter(Approve));
