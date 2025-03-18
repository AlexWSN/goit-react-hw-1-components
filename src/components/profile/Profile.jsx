import styles from './Profile.module.css';
import PropTypes from 'prop-types';

const Profile = ({ condition }) => {
  return <div className={styles.black}>Profile Page</div>;
};

Profile.propTypes = {
  condition: PropTypes.bool,
};

export default Profile;
