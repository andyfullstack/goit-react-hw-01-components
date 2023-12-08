import profilecss from "./Profile.module.css";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={profilecss.profile}>
      <div className={profilecss.description}>
        <img src={avatar} alt="avatar" className={profilecss.avatar} />
        <p className={profilecss.name}>{username}</p>
        <p className={profilecss.tag}>@{tag}</p>
        <p className={profilecss.location}>{location}</p>
      </div>

      <ul className={profilecss.stats}>
        <li>
          <span className={profilecss.label}>Followers</span>
          <span className={profilecss.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={profilecss.label}>Views</span>
          <span className={profilecss.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={profilecss.label}>Likes</span>
          <span className={profilecss.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
