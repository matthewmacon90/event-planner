import profilePic from '../../../assets/profile.png';

const ProfileHome = () => {
    return (
        <div className="profile-home-container">
            <img className='profile-img' src={profilePic} alt="profile" />
        </div>
    )
};

export default ProfileHome;