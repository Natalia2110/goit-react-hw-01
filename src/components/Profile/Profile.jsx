import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css["profile-box"]}>
        <img className={css["profile-img"]} src={image} alt={name} />
        <p className={css["name-title"]}>{name}</p>
        <p className={css["tag-name"]}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css["list-item"]}>
          <span className={css.text}>Followers</span>
          <span className={css.number}>{stats.followers}</span>
        </li>
        <li className={css["list-item"]}>
          <span className={css.text}>Views</span>
          <span className={css.number}>{stats.views}</span>
        </li>
        <li className={css["list-item"]}>
          <span className={css.text}>Likes</span>
          <span className={css.number}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
