import styles from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={styles.card}>
      <div className={styles.mainInfo}>
        <img className={styles.avatar} src={avatar} alt="User avatar" />
        <p className={styles.name}>{username}</p>
        <p className={styles.username}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statItem}>
          <span className={styles.statTitle}>Followers</span>
          <span className={styles.statValue}>{followers}</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.statTitle}>Views</span>
          <span className={styles.statValue}>{views}</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.statTitle}>Likes</span>
          <span className={styles.statValue}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
