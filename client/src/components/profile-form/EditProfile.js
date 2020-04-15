import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const initialState = {
  location: '',
  skills: '',
  bio: '',
  facebook: '',
  linkedin: '',
  phoneNo: '',
  time: '',
  clas: ''
};

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState(initialState);

  //const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile && profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    location,
    time,
    skills,
    bio,
    facebook,
    linkedin,
    phoneNo,
    clas
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('location', location);
    fd.append('skills', skills);
    fd.append('bio', bio);
    fd.append('facebook', facebook);
    fd.append('linkedin', linkedin);
    fd.append('phoneNo', phoneNo);
    fd.append('time', time);
    fd.append('clas', clas);
    createProfile(fd, history, true);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Edit Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Add some changes to your profile
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={onChange}
          />
          <small className='form-text'>
            City & state suggested (eg. Nikunja, Dhaka)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Target Subjects'
            name='skills'
            value={skills}
            onChange={onChange}
          />
          <small className='form-text'>
            Please use comma separated values (eg.
            Math,Physics,Chemistry,English)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Study Level'
            name='clas'
            value={clas}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>
            If you joined as a student tell us which class you are in, If you
            joined as a teacher tell us what is your preferred level of student
            whom you will teach.
          </small>
        </div>
        <div className='form-group'>
          <input
            placeholder='* Mobile No'
            name='phoneNo'
            value={phoneNo}
            onChange={onChange}
          />
          <small className='form-text'>Your Contact Number</small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={onChange}
          />
          <small className='form-text'>Tell us a little about yourself</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Facebook Link'
            name='facebook'
            value={facebook}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>Your Facebook Link</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Linkedin Link'
            name='linkedin'
            value={linkedin}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>Your Linkedin Link</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Preferred Time'
            name='time'
            value={time}
            onChange={e => onChange(e)}
          />
          <small className='form-text'> (eg. 8.00 pm to 11.00 pm)</small>
        </div>{' '}
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
