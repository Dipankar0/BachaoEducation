import React, { useEffect, useState, Fragment } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import { setAlert } from '../../actions/alert';

const CreateProfile = ({
  setAlert,
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
    clas: '',
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
    clas,
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
    fd.append('clas', clas);
    fd.append('file', file);

    if (status && skills && phoneNo && facebook && time && file !== '') {
      createProfile(fd, history);
    } else {
      if (!status) {
        error.status = 'Status is required';
        setAlert(error.status, 'danger');
      }
      if (!skills) {
        error.skills = 'Subjects field is required';
        setAlert(error.skills, 'danger');
      }
      if (!phoneNo) {
        error.phoneNo = 'Mobile No is required';
        setAlert(error.phoneNo, 'danger');
      }
      if (!facebook) {
        error.facebook = 'Facebook is required';
        setAlert(error.facebook, 'danger');
      }
      if (!time) {
        error.time = 'Prefered Time is required';
        setAlert(error.time, 'danger');
      }
      if (!clas) {
        error.clas = 'Class is required';
        setAlert(error.clas, 'danger');
      }
      if (!file) {
        error.file = 'Authentication Card is required';
        setAlert(error.file, 'danger');
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
            <option value='0'>* Join As</option>
            <option value='Student'>Student</option>
            <option value='Teacher'>Teacher</option>
          </select>
          <small className='form-text'>
            Tell us if you want to become a teacher or student
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
            type='number'
            placeholder='* Mobile No'
            name='phoneNo'
            value={phoneNo}
            onChange={e => onChange(e)}
          />
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
  setAlert: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  alert: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  alert: state.alert
});
export default connect(mapStateToProps, {
  createProfile,
  getCurrentProfile,
  setAlert
})(withRouter(CreateProfile));
