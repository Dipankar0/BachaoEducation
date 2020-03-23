//Dashboard for this application where all user will come after login or signup

import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import Spinner from '../layout/Spinner';
import Education from './Education';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Welcome {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          {profile &&
          profile.permission === 'approved' &&
          profile &&
          profile.permission !== 'declined' ? (
            <Fragment>
              <DashboardActions />
              <div className='my-2'>
                <Link to={`/profile/${user._id}`} className='btn btn-primary'>
                  View Profile
                </Link>
              </div>
              <Education education={profile.education} />
              <div>
                <div
                  className='w3-overlay w3-hide-large'
                  style={{ cursor: 'pointer' }}
                  title='close side menu'
                  id='myOverlay'
                ></div>

                <div>
                  <div>
                    <div>
                      <h1 className='w3-text-teal'>নিয়মাবলী</h1>
                      <p>
                        প্রথমেই আপনাকে স্বাগতম Bachao Education এর জগতে। যেহেতু
                        আপনি এই পৃষ্ঠাটি দেখতে পারছেন তার মানে আপনাকে
                        শিক্ষক/শিক্ষার্থী হিসেবে নিযুক্ত করা হয়েছে। এখন প্রশ্ন
                        হল আপনি কিভাবে পড়াবেন অথবা পড়বেন।
                      </p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <h1 className='w3-text-teal'>শিক্ষক হয়ে থাকলে</h1>
                      <p>
                        আমরা আপনার মূল্যবান তথ্যগুলো পেয়েছি। আমরা আপনার তথ্য
                        ব্যবহার করে ফেসবুকে বিজ্ঞাপন দিবো। আপনার কাছে যদি কেউ
                        পড়তে চায় তা আপনাকে ম্যাসেজে জানানো হবে অথবা জানতে পারবেন
                        কমেন্টে। পড়ানোর জন্য আপনাকে ফেসবুক ব্যবহার করতে হবে।
                        পড়ানো সম্পন্ন হলে আপনাকে শিক্ষার্থী থেকে প্রাপ্ত অর্থ
                        প্রদান করা হবে। অর্থ গ্রহণের নিয়ম জানতে এই পেজে যানঃ
                        <Link to='/payment'>Payment</Link>।
                      </p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <h1 className='w3-text-teal'>শিক্ষার্থী হয়ে থাকলে</h1>
                      <p>
                        আমরা আপনার মূল্যবান তথ্যগুলো পেয়েছি। আপনি ফেসবুক থেকে
                        বিজ্ঞাপন দেখে পছন্দের শিক্ষক বাছাই করতে পারবেন। যাকে
                        পছন্দ হবে তাকে আপনার তথ্য শেয়ার করতে পারবেন। শিক্ষক
                        আপনাকে পড়াতে চাইলে আপনি জানতে পারবেন কমেন্টে অথবা আপনাকে
                        ম্যাসেজে জানানো হবে। পড়ার ক্ষেত্রে আপনাকে ফেসবুক ব্যবহার
                        করতে হবে। পড়া সম্পন্ন হলে আপনাকে শিক্ষকের নির্ধারিত
                        মূল্য পরিশোধ করতে হবেc অর্থ প্রদানের নিয়ম জানতে এই পেজে
                        যানঃ
                        <Link to='/payment'>Payment</Link>
                      </p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <h1 className='w3-text-teal'>সতর্কতা</h1>
                      <p>
                        ফেসবুক একাউন্ট আমরা আপনাকে দিবো। নিজের একাউন্ট ব্যবহার
                        করা যাবে না। শিক্ষক শিক্ষার্থীর যে কেউই পড়াশুনার বাইরে
                        কথা বলতে পারবে না। যেকোনো অসদুপায়, অসদাচরণ এর দরুন আপনি
                        বহিষ্কৃত হবেন। অর্থ বিনিময় নিয়মের বাইরে হলে বহিষ্কৃত
                        হবেন।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <h3>
                Your application for joining Education Bachao is submitted
                successfully to Admin
              </h3>
              <p> You will know the result within 3 days</p>
            </Fragment>
          )}

          {profile && profile.permission === 'declined' ? (
            <Fragment>
              <h3>Your application is Rejected by Admin</h3>
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
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
      ) : (
        <Fragment>
          <p>You have not yet setup a profile, please add some info</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);

//This function is for deleting this account
/*<div className='my-2'>
  <button className='btn btn-danger' onClick={() => deleteAccount()}>
    <i className='fas fa-user-minus' /> Delete This Account
  </button>
</div>*/
