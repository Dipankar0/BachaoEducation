import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const CreateProfile = ({
  createProfile,
  getCurrentProfile,
  profile: { profile, loading },
  history
}) => {
  const [formData, setFormData] = useState({
    location: '',
    status: '',
    skills: '',
    bio: '',
    facebook: '',
    linkedin: '',
    phoneNo: '',
    time: '',
    error: {}
  });

  const [file, setFile] = useState('');

  //const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    location,
    status,
    skills,
    bio,
    facebook,
    linkedin,
    phoneNo,
    time,
    error
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onFileChange = e => setFile(e.target.files[0]);

  const onSubmit = e => {
    e.preventDefault();

    const fd = new FormData();
    fd.append('location', location);
    fd.append('status', status);
    fd.append('skills', skills);
    fd.append('bio', bio);
    fd.append('facebook', facebook);
    fd.append('linkedin', linkedin);
    fd.append('phoneNo', phoneNo);
    fd.append('time', time);
    fd.append('file', file);

    console.log(status, skills, facebook, phoneNo, time, file);
    if (status && skills && phoneNo && facebook && time && file !== '') {
      createProfile(fd, history);
    } else {
      if (!status) {
        error.status = 'Status is required';
      }
      if (!skills) {
        error.skills = 'Subjects field is required';
      }
      if (!phoneNo) {
        error.phoneNo = 'Mobile No is required';
      }
      if (!facebook) {
        error.facebook = 'Facebook is required';
      }
      if (!time) {
        error.time = 'Prefered Time is required';
      }
      if (!file) {
        error.file = 'Authentication Card is required';
      }
    }
  };

  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Redirect to='/dashboard' />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Let's get some information to make your
        profile stand out
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={status} onChange={e => onChange(e)}>
            <option value='0'>* Select Professional Status</option>
            <option value='Student'>Student</option>
            <option value='Teacher'>Teacher</option>
          </select>
          <h3 style={{ color: 'red' }}>{error.status}</h3>
          <small className='form-text'>
            Give us an idea of where you are at in your career
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Location'
            name='location'
            value={location}
            onChange={e => onChange(e)}
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
            onChange={e => onChange(e)}
          />
          <h3 style={{ color: 'red' }}>{error.skills}</h3>
          <small className='form-text'>
            Please use comma separated values (eg.
            Math,Physics,Chemistry,English)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='number'
            placeholder='* Mobile No'
            name='phoneNo'
            value={phoneNo}
            onChange={e => onChange(e)}
          />
          <h3 style={{ color: 'red' }}>{error.phoneNo}</h3>
          <small className='form-text'>Your contact number</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Facebook Link'
            name='facebook'
            value={facebook}
            onChange={e => onChange(e)}
          />
          <h3 style={{ color: 'red' }}>{error.facebook}</h3>
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
            placeholder='* Preferred Time'
            name='time'
            value={time}
            onChange={e => onChange(e)}
          />
          <h3 style={{ color: 'red' }}>{error.time}</h3>
          <small className='form-text'> (eg. 8.00 pm to 11.00 pm)</small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={e => onChange(e)}
          />
          <small className='form-text'>Tell us a little about yourself</small>
        </div>
        <div className='form-group'>
          <label>
            {' '}
            <h5>Upload any card to prove your studentship or teachership</h5>
            <input
              type='file'
              placeholder='Identification Card'
              onChange={e => onFileChange(e)}
            />
          </label>
          <h3 style={{ color: 'red' }}>{error.file}</h3>
          <small className='form-text'>
            If you do not upload any authentication card,
            <br /> you might not be approved to become a user of Education
            bachao
          </small>
        </div>

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
